import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
import { flights } from './data/data-en.js'



export async function seedTable() {
    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })
    try {
        db.exec('BEGIN TRANSACTION')
        for (const {airline,from,to,price,fromCountry,toCountry,duration,totalPrice} of flights) {
            db.run(`
                INSERT INTO flights (airline,from,to,price,fromCountry,toCountry,duration,totalPrice)
                VALUES (?,?,?,?,?,?,?,?)
                `,
                [airline,from,to,price,fromCountry,toCountry,duration,totalPrice]
            )
        }
        db.exec('COMMIT')
        
    } catch (error) {
        db.exec(`ROLLBACK`)
        console.log(error.message)
    } finally {
        db.close()
    }
}


seedTable()