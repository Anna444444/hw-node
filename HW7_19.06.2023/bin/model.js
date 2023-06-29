import { Database as DB } from "sqlite-async";
const log = console.log;

export class Database {
    db = null;
    constructor(config) {
        this.config = config;
    }

    async start() {
        this.db = await DB.open(this.config.file);
        await this.createUsers();
        await this.createEvents()
    }
    async stop() {
        await this.db.close()
    }

    async createUsers() {

        let query = `CREATE TABLE IF NOT EXISTS Users(  
            id            integer primary key autoincrement, 
            telegram_id   integer unique not null, 
            telegram_url  text, 
            chat_id       integer unique not null, 
            name          text 
        )`;

        await this.db.exec(query);


    }
    async createEvents() {

        let query = `CREATE TABLE IF NOT EXISTS Events(  
            id            integer primary key autoincrement, 
            name          text  not null, 
            city          text  not null, 
            address       text, 
            date          text not null, 
            time          text, 
            isRegular     integer, 
            price         text, 
            contact       text, 
            org_id        integer not null, 
            poster_url    text       
        )`;
        await this.db.exec(query);
    }

    async addUser(telegram_id, telegram_url, chat_id, name) {
        let query = `INSERT INTO Users ( telegram_id,telegram_url, chat_id,name) VALUES( 
          ?,?,?,?
        )`;

        try { await this.db.run(query, [telegram_id, telegram_url, chat_id, name]); }
        catch { console.log('Такой пользователь уже есть!'); }
    }


    async addEvent(name, city, date, org_id, isRegular, address = "", poster_url = "", time = "", price = "", contact = "") {
        let query = `INSERT INTO Events (name,city,date,org_id,isRegular,address,poster_url,time,price,contact) VALUES(?,?,?,?,?,?,?,?,?,?)`;
        try {
            await this.db.run(query, [name, city, date, org_id, isRegular, address, poster_url, time, price, contact]);
            console.log('Событие успешно добавлено!');
        } catch (error) {
            console.log('Ошибка при добавлении события:', error);
        }
    }



    async getEvent(city, date) {
        let query = `SELECT * FROM Events WHERE city=? AND date=?`;
        try {
            return await this.db.all(query, city, date);
        } catch (error) {
            console.log('Что-то не так с запросом:', error);
        }
    }

    async test() {
        await this.addUser(8690, 1755, "Gulzhan");
        await this.addEvent("Пример", 'Almaty', '12-01-2024', 1122, 0, 'abay');

        // let query = `INSERT INTO Users (name, telegram_id, chat_id) VALUES(  
        // "AMIR",23452,23452345  
        // )`;

        // try { await this.db.exec(query); }
        // catch { console.log('Такой пользователь уже есть!'); }

        // let query = `INSERT INTO Events (name,city,date,org_id) VALUES(  
        //     'Концерт AC/DC',"Almaty",'2023-06-17',1  
        //     )`;
        // try { await this.db.exec(query); }
        // catch { console.log('Такой Event уже есть!'); }


        let query = "SELECT * FROM Users";
        let rows = await this.db.all(query);
        log("Юзеры", rows);

        let events = await this.getEvent('Almaty', '12-01-2024');
        log(events);

        // query = "SELECT * FROM Events";
        // rows = await this.db.all(query);
        // console.log("Эвенты", rows);
    }
}




