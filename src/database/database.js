import fs from 'node:fs/promises';
import test from 'node:test';

export class Database {
    #database = {};


    constructor() {
        fs.readFile(process.env.DATABASE_PATH, 'utf-8')
            .then((data) => {
                this.#database = JSON.parse(data);
            })
            .catch(() => {
                this.#persist();
            });
    }

    #persist() {
        fs.writeFile(
            process.env.DATABASE_PATH,
            JSON.stringify(this.#database)
        );
    }

    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data);
        }else {
            this.#database[table] = [data];
        }
        this.#persist();

    }

    select(table, filters) {
        let data = this.#database[table] ?? [];

        if(filters) {
            data = data.filter((item) => {
                return Object.entries(filters).some(([key, value]) => {
                    return item[key].toLowerCase().includes(value.toLowerCase());
                });
            });
        }

        return data;
    }

}