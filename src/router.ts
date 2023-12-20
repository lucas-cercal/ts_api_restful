import { Router, Request, Response } from 'express'
import { createMovie } from './controllers/movieController'

// Validations
import { validate } from './middleware/handleValidator'

const router = Router()

export default router.get('/test', (req: Request, res: Response) => {
  res.status(200).send('API Working!')
})
  .post('/movie', validate, createMovie)
