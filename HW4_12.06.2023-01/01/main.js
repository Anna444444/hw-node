import readline from 'readline';
import fs from 'fs';
const log = console.log;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) {
      console.error('Ошибка при записи в файл:', err);
    } else {
      log('Информация успешно записана в файл', filename);
    }
    rl.close();
  });
}

rl.question('Введите имя: ', (firstName) => {
  rl.question('Введите фамилию: ', (lastName) => {
    rl.question('Введите дату рождения: ', (birthdate) => {
      rl.question('Введите имя файла для сохранения: ', (filename) => {
        let data = `Имя: ${firstName}\nФамилия: ${lastName}\nДата рождения: ${birthdate}`;

        writeToFile(filename, data);
      });
    });
  });
});
