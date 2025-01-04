import express from 'express'
import { getBooks } from '../controller/book.controller.js'

const router = express.Router()

export default router.get('/', getBooks)