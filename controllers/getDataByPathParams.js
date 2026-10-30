import { enData } from "../data/data-en.js";
import { arData } from "../data/data-ar.js";

export const getDataByPathParams = (req,res) => {
    let filterdFlights = enData

    const {airline} = req.params

    if (airline) {        
        filterdFlights = filterdFlights.filter(flight => {
            return flight.airline.toLowerCase() === airline.toLowerCase()
        })        
    }


    res.json(filterdFlights)
}

export const getDataByPathParamsAr = (req,res) => {
    let filterdFlights = arData

    const {airline} = req.params

    if (airline) {        
        filterdFlights = filterdFlights.filter(flight => {
            return flight.airline === airline
        })        
    }


    res.json(filterdFlights)
}