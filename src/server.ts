import express, { Request, Response } from 'express'

const app = express()

export function doSomething(num1: number, num2: number) {
  return num1 + num2
}
app.get('/', (req: Request, res: Response) => {
  const result = doSomething(1, 2)
  res.send(result)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
