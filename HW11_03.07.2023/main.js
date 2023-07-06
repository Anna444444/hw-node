import { Application } from "./bin/app.js";

const config = {
    database: {
        file: "database.cdb"
    },
    server: {
        port: 3000
    }
}

//ini, json, yaml, xml

const app = new Application(config);
app.start();
