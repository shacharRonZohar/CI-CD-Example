import express, { Request, Response } from 'express'
import { doSomething } from './service.js'

const app = express()

app.get('/', (req: Request, res: Response) => {
  const result = doSomething(1, 2)
  res.send(result)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
