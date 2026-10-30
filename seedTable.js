import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
import { enData } from './data/data-en.js'
import { arData } from './data/data-ar.js'



export async function seedTable(data,tablName) {
    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })
    try {
        await db.exec('BEGIN TRANSACTION')
        for (const {airline,from,to,price,fromCountry,toCountry,duration,totalPrice,bookBtn} of data) {
            db.run(`
                INSERT INTO ${tablName} (airline,"from","to",price,fromCountry,toCountry,duration,totalPrice,bookBtn)
                VALUES (?,?,?,?,?,?,?,?,?)
                `,
                [airline,from,to,price,fromCountry,toCountry,duration,totalPrice,bookBtn]
            )
        }
        await db.exec('COMMIT')
        
    } catch (error) {
        await db.exec(`ROLLBACK`)
        console.log(error.message)
    } finally {
        await db.close()
    }
}

async function main() {
    await seedTable(arData,"ar_flights")
    await seedTable(enData,"en_flights")
}

main()
