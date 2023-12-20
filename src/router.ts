import { Router, Request, Response } from 'express'
import { createMovie, findMovieById, getAllMovies, removeMovie } from './controllers/movieController'
import { movieCreateValidator } from './middleware/movieValidator'

// Validations
import { validate } from './middleware/handleValidator'

const router = Router()

export default router.get('/test', (req: Request, res: Response) => {
  res.status(200).send('API Working!')
})
  .post('/movie', movieCreateValidator(), validate, createMovie)
  .get('/movie/:id', findMovieById)
  .get('/movie', getAllMovies)
  .delete('/movie/:id', removeMovie)
