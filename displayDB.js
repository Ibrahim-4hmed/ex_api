import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

async function viewAllProducts(tablName) {
  const db = await open({ 
    filename: path.join('database.db'),
    driver: sqlite3.Database
  });

  try { 
    const flights = await db.all(`SELECT * FROM ${tablName}`)
    // Neater table display
    const displayItems = flights.map(({ id, airline, from, to, price }) => {
      return { id, airline, from, to,price }
    })
    console.table(displayItems)
  } catch (err) {
    console.error('Error fetching flights:', err.message)
  } finally {
    await db.close()
  }
}
async function main() {
  await viewAllProducts('ar_flights');
  await viewAllProducts('en_flights');
}

main();