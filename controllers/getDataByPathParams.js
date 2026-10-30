
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

const getDataByAirline = async (req, res, tableName) => {
    const { airline } = req.params

    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })

    try {
        const data = await db.all(`
            SELECT * FROM "${tableName}"
            WHERE LOWER(airline) = LOWER(?)
        `, [airline])

        return res.json(data)

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: 'Internal Server Error'
        })

    } finally {
        await db.close()
    }
}

export const getDataByPathParams = (req, res) =>
    getDataByAirline(req, res, 'en_flights')

export const getDataByPathParamsAr = (req, res) =>
    getDataByAirline(req, res, 'ar_flights')
