import express from 'express'
import cors from 'cors'
import { getGfRouter } from './routes/getGF.js'
import 'dotenv/config'


const app = express()
const PORT = process.env.PORT
app.use(cors())

app.use('/gf', getGfRouter)

app.listen(PORT, ()=> console.log(`App is listening on port ${PORT}`))