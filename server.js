/*
Authors:
	Andrey Arguedas Espinoza
	Daniela Armas Sánchez
	Michael Chen Wang
	Kimberly Olivas Delgado
*/
const express      = require('express')
const bodyParser   = require('body-parser')
const morgan       = require('morgan')
const favicon      = require('express-favicon')
const mongoose     = require('mongoose')
const path         = require('path')
const http         = require('http')

const sudokuRouter = require('./server/routes/sudokuRouter')

const port         = process.env.PORT || 9090;
const app          = express()

mongoose.connect('mongodb://admin:admin@ds147454.mlab.com:47454/sudoku', {useMongoClient: true})

//'mongodb://localhost/sudokus //for local deployment
//mongodb://admin:admin@ds147454.mlab.com:47454/sudoku //for heroku deployment

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: false} ))

app.use(express.static( path.join(__dirname, 'dist') ))
app.use('/api/sudoku', sudokuRouter)

app.use('/api', (req, res) => {
    res.json( {message: 'This is working'} )
} )

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
} )


app.set('port', port)
const server = http.createServer(app)

server.listen(port, () => console.log(`*** Server is up and running on port ${port} ***`))
