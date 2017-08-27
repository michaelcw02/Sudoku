/**
 * Main Server
 */

const express      = require('express')
const bodyParser   = require('body-parser')
const morgan       = require('morgan')
const favicon      = require('express-favicon')
const mongoose     = require('mongoose')
const path         = require('path')
const http         = require('http')

const app          = express()

const sudokuRouter = require('./routes/sudokuRouter')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded( {extended: false} ))
app.use(bodyParser.json())

const port         = process.env.PORT || 9090;

app.use('/sudoku', sudokuRouter)

//this one is the last one to build
app.use('/sudoku', express.static( path.join(__dirname, 'dist/') ))

app.set('port', port)
const server = http.createServer(app)

server.listen(port, () => console.log(`*** Server is up and running on port ${port} ***`))

