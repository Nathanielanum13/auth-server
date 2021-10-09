import http from 'http'
import express, { Application } from 'express'
import router from './routes/index'
import dbConnect from './model/db/db'

const { PORT, NODE_ENV, MONGO_URI } = process.env

// connect to database
dbConnect(MONGO_URI)

// create server
const app: Application = express()
const server = http.createServer(app)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)

server.listen(PORT, () => {
    console.log(`Server running in ${NODE_ENV} mode on port ${PORT || 3000}`)
})