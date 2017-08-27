const express = require('express')

const router  = express.Router()

const Sudoku  = require('../models/sudoku')

router.use( (req, res, next) => {
    console.log(`Time: ${Date.now()}`)
    next()
} )

router.route('/')
 .get( (req, res) => {
     res.json( {message: 'This is working dude'} )
 } )

router.route('/sudoku')
 .post( (req, res) => {
    console.log(`Requested a POST of ${req.body}`)
    let sudoku = new Sudoku();
    sudoku.grid = req.body.sudoku;
    sudoku.mode = req.body.mode;
    sudoku.save( (err) => {
        if (err)    res.json( {name: err.name, message: err.message, status: 666} )
        res.json( {name: "SudokuCreated", message: "Sudoku Inserted into DB successfully", status: 69} )
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


router.route('/sudoku/:sudokuId')
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
            res.json( {name: "SudokuUpdated", message: "Sudoku has been successfully updated", status: 69} )
    } )
 } )
 .delete( (req, res) => {
    let id = req.params.sudoku__id;
    Sudoku.remove( id, (err) => {
        if (err)    res.json( {name: err.name, message: err.message, status: 666} )
        res.json( {name: "SudokuDeleted", message: "Sudoku has been successfully deleted from DB", status: 69} )
    } )
 } )
 

 module.exports = router