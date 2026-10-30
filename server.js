import express from 'express'
import { apiRouter } from './routes/apiRouter.js'
import cors from 'cors'

const PORT  =  process.env.PORT || 3000;

const app = express()
app.use(cors())

app.use('/api',apiRouter)

app.use((req,res) => {
    res.status(404).json({Error: 'Page Not Found'})
})


app.listen(PORT,() => console.log(`Connected On Port ${PORT}`))