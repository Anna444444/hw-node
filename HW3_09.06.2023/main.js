const log = console.log;

const EventEmitter = require('events');

class InputHandler extends EventEmitter {
    constructor() {
        super();
    }

    start() {
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (data) => {
            let input = data.trim();

            if (input.startsWith('solve')) {
                let expression = input.slice(6).trim();
                this.emit('solve', expression);
            } else if (input === 'exit') {
                this.emit('exit');
            } else {
                this.emit('input', input);
            }
        });
    }

    stop() {
        process.stdin.removeAllListeners('data');
    }
}

let inputHandler = new InputHandler();

inputHandler.on('input', (input) => {
    log(input);
});

inputHandler.on('solve', (expression) => {
    try {
        let result = eval(expression);
        log(result);
    } catch {
        log('Не могу вычислить');
    }
});

inputHandler.on('exit', () => {
    inputHandler.stop();
    process.exit();
});

inputHandler.start();
