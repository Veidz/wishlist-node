import express from 'express'
import cors from 'cors'
import env from './env'
import Connection from '../infra/db/connection'

const app = express()

app.use(cors())
app.use(express.json())

const connection = new Connection()
connection.connect().catch(console.error)

app.listen(env.port, () => {
    console.log(`Server is running at port ${env.port}`)
})
