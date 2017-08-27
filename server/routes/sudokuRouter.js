const express = require('express')
const router  = express.Router()

router.use( (req, res, next) => {
    console.log(`Time: ${Date.now()}`)
    next()
} )

router.route('/')
 .get( (req, res) => {
     res.json( {message: 'This is working man'} )
 } )


 module.exports = router