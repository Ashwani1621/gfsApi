import { getGf } from '../controllers/getGf.js'
import express from 'express'

export const getGfRouter = express.Router()

getGfRouter.get('/', getGf)