import express from 'express'
import { getEnData, getArData } from '../controllers/getAlldata.js'
import { getDataByPathParams, getDataByPathParamsAr } from '../controllers/getDataByPathParams.js'


export const apiRouter = express.Router()


apiRouter.get('/',getEnData)
apiRouter.get('/ar',getArData)
apiRouter.get('/airline/:airline',getDataByPathParams)
apiRouter.get('/airline/ar/:airline',getDataByPathParamsAr)
