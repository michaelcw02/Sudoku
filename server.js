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

const sudokuRouter = require('./server/routes/sudokuRouter')

const app          = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: false} ))

const port         = process.env.PORT || 9090;

//this one is the last one to build
app.use(express.static( path.join(__dirname, 'dist') ))

app.use('/sudoku', sudokuRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
} )


app.set('port', port)
const server = http.createServer(app)

server.listen(port, () => console.log(`*** Server is up and running on port ${port} ***`))

