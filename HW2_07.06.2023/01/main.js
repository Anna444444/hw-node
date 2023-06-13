const log = console.log;

import { prompt } from './prompt.js';

// Пример использования №1
prompt("Сколько вам лет?")
    .then(Number)
    .then((userAge) => {
        log("Ваш возраст:", userAge);
    })
    .catch((error) => {
        console.error("Ошибка:", error);
    });

// Пример использования №2
// (async () => {
//     try {
//         let userInput = await prompt("Сколько вам лет?");
//         let userAge = Number(userInput);
//         log("Ваш возраст:", userAge);
//     } catch (error) {
//         console.error("Ошибка:", error);
//     }
// })();
