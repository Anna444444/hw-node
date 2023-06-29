import express from 'express';
import fs from 'fs';
import querystring from 'querystring';

const app = express();
const users = [];
fs.writeFileSync('./users.json', JSON.stringify(users), 'utf-8');
console.log('users.json created with an empty array');

app.get('/', (req, res) => {
    const data = fs.readFileSync('./index.html', 'utf-8');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
});

app.get('/register', (req, res) => {
    const data = fs.readFileSync('./register.html', 'utf-8');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
});

app.post('/users', async (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', async () => {
        const userData = querystring.parse(body);
        const users = JSON.parse(await readFile('./users.json', 'utf-8'));
        users.push(userData);
        await writeFile('./users.json', JSON.stringify(users), 'utf-8');
        const redirectUrl = '/users?name=' + userData.name;
        res.statusCode = 302;
        res.setHeader('Location', redirectUrl);
        res.end();
    });
});

app.get('/users', async (req, res) => {
    const name = req.query.name;
    if (name) {
        let data = fs.readFileSync('./users.html', 'utf-8');
        data = data.replace('%name%', name);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    } else {
        res.statusCode = 403;
        res.statusMessage = 'name is not specified';
        res.end();
    }
});

app.get('/feedback', (req, res) => {
    const data = fs.readFileSync('./feedback.html', 'utf-8');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
});

app.get('/favicon.ico', (req, res) => {
    const data = fs.readFileSync('./favicon.ico');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/x-icon');
    res.send(data);
});

app.use((req, res) => {
    res.statusCode = 404;
    res.statusMessage = 'Page not found';
    res.end();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

function readFile(path, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function writeFile(path, data, encoding) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, encoding, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}
