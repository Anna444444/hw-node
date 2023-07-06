import sqlite3 from "sqlite3";

export class DataStorage {
    constructor(config) {
        this.db = new sqlite3.Database(config.database.file);
        this.createTable();
    }

    createTable() {
        this.db.run(
            `CREATE TABLE IF NOT EXISTS Users (
                id              integer primary key autoincrement,
                login           text not null,
                password        text not null,
                email           text
            )`
        );
    }

    addUser(login, passwd, email) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO Users (login, password, email) VALUES (?, ?, ?)`;
            this.db.run(query, [login, passwd, email], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.lastID);
                }
            });
        });
    }

    getUser(id) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM Users WHERE id = ?`;
            this.db.get(query, [id], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }
}


