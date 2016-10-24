var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Airport = require('./models/airports');
Flight = require('./models/flights');
Booking = require('./models/bookings');
FlightDetail = require('./models/flightdetails');
Passenger = require('./models/passengers');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/DBFlights');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Hello!! <br/> Please use the following Api: <br/> /api/airports : GET list of Airports. <br/> /api/flights : GET list of Flights. <br/> /api/bookings : GET list of Bookings. <br/> /api/flightdetails : GET list of Flights Detail. <br/> /api/passengers : GET list of Passengers.');
});

app.get('/api/airports', function(req, res){
	Airport.getAirports(function(err, airports) {
		if(err){
			throw err;
		}
		res.json(airports);
	});
});

app.post('/api/airports', function(req, res){
	var airport = req.body;
	Airport.addAirports(airport, function(err, airport) {
		if(err){
			throw err;
		}
		res.json(airport);
	});
});

app.get('/api/flights', function(req, res){
	Flight.getFlights(function(err, flights) {
		if(err){
			throw err;
		}
		res.json(flights);
	});
});

app.get('/api/flights/:_noiDi', function(req, res){
	Flight.getFlightById(req.params._noiDi, function(err, flights) {
		if(err){
			throw err;
		}
		res.json(flights);
	});
});

app.post('/api/flights', function(req, res){
	var flight = req.body;
	Flight.addFlight(flight, function(err, flight) {
		if(err){
			throw err;
		}
		res.json(flight);
	});
});


app.get('/api/bookings', function(req, res){
	Booking.getBookings(function(err, booking) {
		if(err){
			throw err;
		}
		res.json(booking);
	});
});

app.put('/api/bookings/:_maDatCho', function(req, res){
	var booking = req.body;
	Booking.updateBooking(req.params._maDatCho, booking, {}, function(err, booking) {
		if(err){
			throw err;
		}
		res.json(booking);
	});

});

app.post('/api/bookings', function(req, res){
	var booking = req.body;
	Booking.addBooking(booking, function(err, booking) {
		if(err){
			throw err;
		}
		res.json(booking);
	});
});

app.get('/api/flightdetails', function(req, res){
	FlightDetail.getFlightDetail(function(err, flightdetail) {
		if(err){
			throw err;
		}
		res.json(flightdetail);
	});
});

app.post('/api/flightdetails', function(req, res){
	var flightdetail = req.body;
	FlightDetail.addFlightDetail(flightdetail, function(err, flightdetail) {
		if(err){
			throw err;
		}
		res.json(flightdetail);
	});
});

app.get('/api/flightdetails/:_maDatCho', function(req, res){
	FlightDetail.getFlightDetailById(req.params._maDatCho, function(err, flightdetails) {
		if(err){
			throw err;
		}
		res.json(flightdetails);
	});
});

app.get('/api/passengers', function(req, res){
	Passenger.getPassengers(function(err, passengers) {
		if(err){
			throw err;
		}
		res.json(passengers);
	});
});

app.post('/api/passengers', function(req, res){
	var passenger = req.body;
	Passenger.addPassenger(passenger, function(err, passenger) {
		if(err){
			throw err;
		}
		res.json(passenger);
	});
});

app.listen(8080);
console.log('Running on port 8080...');