let express    = require('express');
let bodyParser = require('body-parser');
let app        = express(); 
let morgan     = require('morgan');
let favicon    = require('express-favicon');
let mongoose   = require('mongoose');

// APP BASIC CONFIGURATION
app.use(morgan('dev')); // log requests to console
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port     = process.env.PORT || 8080; // set  port (default 8080)
///////////////////////////////////////////////////////////////////////////////
// CONNECT TO DB
mongoose.connect('mongodb://localhost/sudokus',
                 {
					 useMongoClient: true
				 } // See http://mongoosejs.com/docs/connections.html#use-mongo-client
);

// Data model
let Sudoku     = require('./app/models/sudoku');
////////////////////////////////////////////////////////////////////////////////
// API SETUP

// 1) Create router
let router = express.Router();
// 2) Config paths

// Middleware to use for all requests
router.use( (req, res, next) => {
	// 
	console.log('General middleware activated');
	next();
});

// Route to test (accessed at GET http://localhost:8080/api)
router.get('/', (req, res) => {
	res.json({ message: '*** Rest API is working fine! ***' });	
});

// REST API
// ON /bears
//    POST (create one)
//    GET  ( get all)
// ----------------------------------------------------
// ***** Notice the "callback hell" *****
//-----------------------------------------------------
router.route('/sudokus')
	// create a bear (accessed at POST http://localhost:8080/sudoku)
	.post( (req, res) => {
				console.log('POST requested: ' + req.body.sudoku);
				let sudoku = new Sudoku();		// create a new instance of the sudoku model
				// Extract data from request
				console.log('Post body ' + JSON.stringify(req.body))
				sudoku.sudoku = req.body.sudoku;  // set the sudoku
										// **** NOTICE: We should avoid potential injection *****
										// https://en.wikipedia.org/wiki/Code_injection
				sudoku.save( (err) => {
							if (err)
								res.send(err);
							console.log('Post Error = ' + err);
							res.json({ message: 'Sudoku created!', "sudokuId" : sudoku._id});
				});	
	})

	// get all the sudokus (accessed at GET http://localhost:8080/api/sudoku)
	.get( (req, res) => {
		console.log('GET requested');
		Sudoku.find( (err, sudokus) => {
			        if (err)
				       res.send(err);
			        res.json(sudokus);
		});
	});

// ON /bears/:sudoku_id
// ----------------------------------------------------
router.route('/sudokus/:sudoku_id')

	// GET
	.get( (req, res) => {
		     Sudoku.findById(req.params.sudoku_id, 
		                    (err, sudoku) => {
						      if (err)
							     res.send(err);
						      res.json(sudoku);
		             });
	 })

	// UPDATE 
	.put( (req, res) => {
		Sudoku.findById(req.params.sudoku_id, (err, sudoku) => {

			if (err)
				res.send(err);

			sudoku.sudoku = req.body.sudoku;
			sudoku.save( (err) => {
				if (err)
					res.send(err);

				res.json({ status: 'ok', message: 'Sudoku updated!' });
			});

		});
	})

	// DELETE
	.delete( (req, res) => {
		Sudoku.remove({
			_id: req.params.sudoku_id
		}, (err, sudoku) => {
			if (err)
				res.send(err);

			res.json({ status: 'ok', message: 'Successfully deleted' });
		});
	});

///////////////////////////////////////////////////////////////////////
// APP settings
// REGISTER STATIC
// See https://expressjs.com/en/starter/static-files.html
app.use('/static', express.static((__dirname + '/public')))
//  See https://www.npmjs.com/package/express-favicon
app.use(favicon(__dirname + '/public/images/favicon.png'));

// REGISTER API ROUTER
app.use('/api', router);

//----------- START THE SERVER ---------------------
// 
app.listen(port);
console.log('*** Server is up and running on port ' + port + ' ***' );