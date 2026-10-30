import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

export async function  createTable() {
    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })

    // "id": 1754567501000,
    //   "from": "عنتيبي",
    //   "fromCountry": "أوغندا",
    //   "to": "بورتسودان",
    //   "toCountry": "السودان",
    //   "airline": "تاركو",
    //   "duration": "2 ساعة 30 دقيقة",
    //   "price": "$350",
    //   "totalPrice": "المبلغ الكلي",
    //   "bookBtn": "احجز الآن على واتساب"
    await db.exec(`
        CREATE TABLE IF NOT EXISTS flights (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            "from" TEXT NOT NULL,
            fromCountry TEXT NOT NULL,
            "to" TEXT NOT NULL,
            toCountry TEXT NOT NULL,
            airline TEXT NOT NULL,
            duration INTEGER,
            price INTEGER NOT NULL,
            totalPrice TEXT NOT NULL,
            bookBtn TEXT NOT NULL
        )
    `)

    db.close()
}

createTable()
