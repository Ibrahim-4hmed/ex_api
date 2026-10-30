
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

const getFlights = async (req, res, tableName) => {

    const { from, to } = req.query

    if (!from || !to) {
        return res.status(400).json({
            message: 'Both from and to are required'
        })
    }

    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })

    try {

        const data = await db.all(`
            SELECT * FROM "${tableName}"
            WHERE LOWER("from") = LOWER(?)
            AND LOWER("to") = LOWER(?)
        `, [from, to])

        return res.json(data)

    } catch (err) {

        console.error(err)

        return res.status(500).json({
            message: 'Internal Server Error'
        })

    } finally {
        await db.close()
    }
}

export const getArData = (req, res) =>
    getFlights(req, res, 'ar_flights')

export const getEnData = (req, res) =>
    getFlights(req, res, 'en_flights')
