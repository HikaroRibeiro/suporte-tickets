import fs from 'node:fs/promises';

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

    select(table) {
        const data = this.#database[table] ?? [];
        return data;
    }

}