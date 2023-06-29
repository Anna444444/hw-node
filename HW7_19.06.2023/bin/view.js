import TelegramBot from "node-telegram-bot-api";
const log = console.log;

export class Telegram {
    users = {};

    constructor(config) {
        this.config = config;
        this.bot = new TelegramBot(this.config.token, { polling: true });
    }

    start() {
        this.textHandler = this._textHandler.bind(this);
        this.buttonHandler = this._buttonHandler.bind(this);
        this.bot.on('text', this.textHandler);
        this.bot.on('callback_query', this.buttonHandler);
    }

    stop() {
        this.bot.off('text', this.textHandler);
        this.bot.off('callback_query', this.buttonHandler);
    }

    startSearch(callback) {
        this.onSearch = callback;
    }

    startAddEvent(callback) {
        this.onAddEvent = callback;
    }

    process(user, message) {
        switch (user.state) {
            case "wait_command":
                if (message == "find_events") {
                    this.bot.sendMessage(user.chatId, 'В каком городе?');
                    user.state = "wait_city";
                }
                if (message == "create_event") {
                    this.bot.sendMessage(user.chatId, 'Название мероприятия?');
                    user.state = "wait_name";
                }
                break;

            case "wait_name":
                if (user.event.name === '' || user.event.name === ' ') {
                    user.state = "wait_command";
                    this.process(user, "create_event");
                }
                user.event.name = message.slice(0, 1).toUpperCase() + message.slice(1).toLowerCase();
                this.bot.sendMessage(user.chatId, 'В каком городе?');
                user.state = "wait_city";
                break;

            case "wait_city":
                if (user.event.city === '' || user.event.city === ' ') user.state = "wait_name";
                user.event.city = message.slice(0, 1).toUpperCase() + message.slice(1).toLowerCase();
                this.bot.sendMessage(user.chatId, 'Дата мероприятия (напр. 01.12.2023)?');
                user.state = "wait_date";
                break;

            case "wait_date":
                if (user.event.date === '' || user.event.date === ' ') user.state = "wait_city";
                user.event.date = message;

                if (!user.event.name) {
                    this.bot.sendMessage(user.chatId, 'Сейчас скажу...')
                        .then((sentMessage) => {
                            this.lastMessageId = sentMessage.message_id;
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                    user.state = null;
                    this.emit('search', user.chatId, user.event.city, user.event.date);
                } else {
                    user.event.org_id = user.chatId;
                    user.event.contact_name = user.current_user.telegramUrl;

                    this.bot.sendMessage(user.chatId, 'Сколько дней продлиться?');
                    user.state = "wait_regular";
                }
                break;

            case "wait_regular":
                user.event.isRegular = message;
                this.bot.sendMessage(user.chatId, 'Адрес мероприятия: ');
                user.state = "wait_address";
                break;

            case "wait_address":
                user.event.address = message;
                this.bot.sendMessage(user.chatId, 'Время');
                user.state = "wait_time";
                break;

            case "wait_time":
                user.event.time = message;
                this.bot.sendMessage(user.chatId, 'Контактный телефон');
                user.state = "wait_contact";
                break;

            case "wait_contact":
                user.event.contact = message;
                user.state = null;
                this.bot.sendMessage(user.chatId, 'Событие опубликовано!');
                this.emit('addEvent', user.chatId, user.event, user.current_user);
                break;
        }
    }

    _textHandler(message) {
        switch (message.text) {
            case "/start":
                this.users["" + message.chat.id] =
                    { state: "wait_command", event: {}, chatId: message.chat.id };
                this.bot.sendMessage(message.chat.id, `Что по плану?`, {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: "Узнать о событиях", callback_data: "find_events" },
                                { text: "Создать событие", callback_data: "create_event" },
                            ]
                        ]
                    }
                });
                break;

            default:
                let user = this.users["" + message.chat.id];
                if (user) {
                    this.process(user, message.text);
                } else {
                    this.bot.sendMessage(message.chat.id, `Отправьте /start`);
                }
        }
    }

    _buttonHandler(msg) {
        let user = this.users["" + msg.message.chat.id];
        switch (msg.data) {
            case "find_events":
                this.process(user, "find_events");
                break;

            case "create_event":
                let curUser = { telegramId: msg.message.from.id, chatId: msg.message.chat.id, name: msg.message.chat.first_name, telegramUrl: msg.message.chat.username };
                user.current_user = curUser;
                this.process(user, "create_event");
                break;
        }
    }
}