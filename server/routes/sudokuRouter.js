const express = require('express')

const router = express.Router()

const Sudoku        = require('../entity/sudoku')
const User          = require('../entity/user')
const ServerSudoku  = require('../models/serverSudoku')

let saveUser = ((user, sudo_id) => { user.games.push(sudo_id); return user.save() }); //Trying to return a promise
let insertSudoku = ((req, sudoku) => { sudoku.grid = req.body.grid; sudoku.level = req.body.level; sudoku.date = new Date(); return sudoku.save()}); //Trying to return a promise
let findUser = (req => { return User.find({ name: req.body.name }) });
let countUser = ((req) => { return findUser(req).count() });
let updateUser = ((req, sudo_id) => User.findOneAndUpdate({ name: req.body.name },
    { $push: { games: sudo_id } },
    { upsert: true, new: true }
));

router.use((req, res, next) => {
    console.log(`You are in the Sudoku Router at: ${Date.now()}`)
    next()
})

router.route('/')

    .post((req, res) => {
        console.log(`Requested a POST of ${req.body}`)
        let user = new User();
        let sudoku = new Sudoku();
        user.name = req.body.name;
        insertSudoku(req, sudoku)
            .then((res) => countUser(req))
            .then((res) => { return res === 0 ? saveUser(user, sudoku._id) : updateUser(req, sudoku._id) })
            .then((user) => res.json({ message: 'Sudoku Created!', "user name": user.name, "_id": user._id }))
            .catch((err) => res.send(err));
    })

    .get((req, res) => {
        console.log(`Requested a GET of ${req.body}`)
        Sudoku.find((err, data) => {
            if (err) res.json({ name: err.name, message: err.message, status: 666 })
            console.log(data)
            res.json(data)
        })
    })

router.route('/level/:level')

    .get((req, res) => {
        let level = req.params.level;
        level = level.toLowerCase();
        let filter = { level: level };
        Sudoku.findOneRandom(filter, (err, data) => {
            if (err) res.json({ name: err.name, message: err.message, status: 666 })
            console.log({ grid: data });
            res.json({ grid: data.grid })
        })
    })


router.route('/games/:userName')

    .get((req, res) => {
        let userName = req.params.userName;
        User.find({name : userName}, {games : 1, _id : 0})
            .then(data => Sudoku.find({ _id: { $in : data[0].games}}))
            .then(data => res.json({ message: 'Games loaded!', matches : data}))
            .catch(err => res.send(err))
    })

router.route('/games/')
    
    .post( (req, res) => {
        console.log(`Requested a POST of ${req.body}`)
        let serverSudoku = new ServerSudoku(req.body.grid);
        let grid = serverSudoku.solve();
        res.json({message: 'Sudoku Solved', grid: grid})
    } )

 /*.put( (req, res) => {
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
 } )*/


 module.exports = router