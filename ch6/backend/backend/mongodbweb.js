import { createServer } from 'node:http'
import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017/'
const dbname = 'Individual_Project'
const client = new MongoClient(url)

try {
  await client.connect()
  console.log('Successfully connected to the database!')
} catch (err) {
  console.error('Errro connecting to database', err)
}

const server = createServer(async (req, res) => {
  const db = client.db(dbname)
  const users = db.collection('users')
  const usersList = await users.find().toArray()
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(usersList))
})

const host = 'localhost'
const port = 3000
server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
