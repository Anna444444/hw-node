const log = console.log;

module.exports = {
    sayHi: function (message) {
        log(`
░░░░░░░░░░░░░░░░░░░▄▄▄░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░███▄░░░░░░░░░░░
▄░░░░░░░░░░░░▄░░░░░▀████▄▄▄▄▄▄░░░░
█▄░░░░░░░░░▄██░░░░░░░▀▀█████████░░
██████████████░░░░░░░░░░░░░░░▀███░
███▀████▀█████░▄▄███████▄▄░░░░████
██░░░██░░░████░████████████░░▄███▀
▀██▄████▄████░▄█████████████████▀░
░▀██████████▀▄████████████████▀░░░
░░░▀▀████████████████████████░░░░░
░░░░░████▀▀▀████▀░░░░░▀▀█████░░░░░
░░░░░████░░░████░░░░██▄░▀████░░░░░
░░░░░████░░░████░░░░████░████░░░░░
░░░░░████░░░████░░░░████░████░░░░░
░░░░░████░░░████░░░░████░████░░░░░
░░░░░████░░░████░░░░████░████░░░░░
░░░░░████░░░████░░░░████░████░░░░░
░░░░░░▀▀░░░░░▀▀░░░░░░▀▀░░░▀▀░░░░░░
            ${message}  
            `)
    },
    sayGoodbye: function (message) {
        log(`
    ░░░░░░░░░░░░░░██▄▄░░░░░░░▄▄▀░
    ░░░░░░░░░░░░░░██▀█▄░░░░▄█▀░░░
    ░░░░░░░░░░░░░░██░░█▄▄██▀░░░░░
    ░░░▄▄█████▀▄▄█▀▀░░░▀██░░░░░░░
    ░▄█▀▀░█▀░░▄▀░░░░░░░▄░▀▄░░░░░░
    ░▀░░▄▀░░░█░░░░▄░░░░▀▀░░▀▄░░░░
    ░░░▀░░░░▀░░░▄███░░░░░░░░░▀▄░░
    ░░▀░░░░░░░▄█▀░░▀▄░░░░░░░░░▀█░
    ░█░░░░░░░█▀░░░░░░▀▀▀██▄░░░░█▀
    ▄█░░░░░░░▀░░░░░░░░░░░▀█▄████░
    ██▄▄░░░░░░░░░░░█░░░░░░▀▀▀░░░░
    ░▀▀▀▀██▄░░░░░░░█░░░░░░░░░░░░░
    ░░░░░░▀▀██▄░░░░░█░░░░░░░░░░░░
    ░░░░░░░░░▀██▄░░░██░░░░░░░░░░░
    ░░░░░░░░░░░██▄░░░█░░░░░░░░░░░
    ░░░░░░░░░░░░▀██░▄█░░░░░░░░░░░
    ░░░░░░░░░░░░░▀████░░░░░░░░░░░
    ░░░░░░░░░░░░░░▀██▀░░░░░░░░░░░
                ${message}      
        `)
    }
}

