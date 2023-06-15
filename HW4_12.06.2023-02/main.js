import fs from 'fs';
const log = console.log;

fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка при чтении файла:', err);
        return;
    }

    try {
        const json = JSON.parse(data);

        log('Текущее значение count:', json.count);

        json.count++;

        fs.writeFile('data.json', JSON.stringify(json), 'utf8', (err) => {
            if (err) {
                console.error('Ошибка при записи в файл:', err);
            } else {
                log('JSON успешно обновлен');
            }
        });
    } catch (err) {
        console.error('Ошибка при разборе JSON:', err);
    }
});
