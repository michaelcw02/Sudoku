const express = require('express')

const router  = express.Router()

const Sudoku  = require('../entity/sudoku')

router.use( (req, res, next) => {
    console.log(`You are in the Sudoku Router at: ${Date.now()}`)
    next()
} )

router.route('/')
 .post( (req, res) => {
    console.log(`Requested a POST of ${req.body}`)
    let sudoku = new Sudoku();
    sudoku.grid = req.body.grid;
    sudoku.level = req.body.level;
    sudoku.save( (err) => {
        if (err)    res.json( {name: err.name, message: err.message, status: 666} )
        res.json( {name: "sudokuCreated", message: "sudoku Inserted into DB successfully", status: 69} )
    } )
 } )
 .get( (req, res) => {
    console.log(`Requested a GET of ${req.body}`)
    Sudoku.find( (err, data) => {
        if (err)    res.json( {name: err.name, message: err.message, status: 666} )
        console.log(data)
        res.json( data )
    } )
 } )

router.route('/level/:level')
 .get( (req, res) => {
     let level = req.params.level;
     console.log(level)
     console.log(req.params)
     res.json( {level: level, grid: "PLACEHOLDER"} )
 } )


router.route('/modify/:sudokuId/:sudokuGrid?')
 .get( (req, res) => {
    let id = req.params.sudoku__id;
    Sudoku.findById( id, (err, data) => {
        if (err)    res.json( {name: err.name, message: err.message, status: 666} )
        res.json( data );
    })
 } )
 .put( (req, res) => {
    let id = req.params.sudoku__id;
    Sudoku.findByIdAndUpdate( id, (err, data) => {
        if (err)    res.json( {name: err.name, message: err.message, status: 666} )
            res.json( {name: "sudokuUpdated", message: "sudoku has been successfully updated", status: 69} )
    } )
 } )
 .delete( (req, res) => {
    let id = req.params.sudoku__id;
    Sudoku.remove( id, (err) => {
        if (err)    res.json( {name: err.name, message: err.message, status: 666} )
        res.json( {name: "sudokuDeleted", message: "sudoku has been successfully deleted from DB", status: 69} )
    } )
 } )


 module.exports = router