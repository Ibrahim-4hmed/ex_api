import { enData } from "../data/data-en.js";
import { arData } from "../data/data-ar.js";

export const getEnData = (req,res) => {
    let filterdFlights = enData
    const {from,to,airline} = req.query

    if(from) {
        filterdFlights = filterdFlights.filter(flight => {
            return flight.from.toLowerCase() === from.toLowerCase()
        })
    }

    if(to) {
        filterdFlights = filterdFlights.filter(flight => {
            return flight.to.toLowerCase() === to.toLowerCase()
        })
    }

    if(airline) {
        filterdFlights = filterdFlights.filter(flight => {
            return flight.airline.toLowerCase() === airline.toLowerCase()
        })
    }

    res.json(filterdFlights)
}

export const getArData = (req,res) => {
    let filterdFlights = arData
    const {from,to,airline} = req.query

    if(from) {
        filterdFlights = filterdFlights.filter(flight => {
            return flight.from === from
           })
    }

    if(to) {
        filterdFlights = filterdFlights.filter(flight => {
            return flight.t== to
        })
    }

    if(airline) {
        filterdFlights = filterdFlights.filter(flight => {
            return flight.airline === airline
        })
    }

    res.json(filterdFlights)
}