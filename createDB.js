import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

export async function  createTable(tablName) {
    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })
    
    await db.exec(`
        CREATE TABLE IF NOT EXISTS ${tablName} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            "from" TEXT NOT NULL,
            fromCountry TEXT NOT NULL,
            "to" TEXT NOT NULL,
            toCountry TEXT NOT NULL,
            airline TEXT NOT NULL,
            duration INTEGER,
            price INTEGER NOT NULL,
            totalPrice TEXT NOT NULL,
            bookBtn TEXT 
        )
    `)

    await db.close()
}
async function main() {
    await createTable("ar_flights")
    await createTable("en_flights")
}

main()

