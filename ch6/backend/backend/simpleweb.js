import { createServer } from 'node:http'

const server = createServer((reg, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello http world!')
})

const host = 'localhost'
const port = 3000

server.listen(port, host, () => {
  console.log('Server listening on http://${host}:${port}')
})
