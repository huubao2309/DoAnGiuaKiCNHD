var mongoose = require('mongoose');

// Flight Schema
var flightSchema = mongoose.Schema({
	_ma:{
		type: String,
		required: true
	},
	_noiDi:{
		type: String,
		required: true
	},
	_noiDen:{
		type: String,
		required: true
	},
	_ngay:{
		type: String,
		required: true
	},
	_gio:{
		type: String,
		required: true
	},
	_hang:{
		type: String,
		required: true
	},
	_mucGia:{
		type: String,
		required: true
	},
	_soLuongGhe:{
		type: String,
		required: true
	},
	_giaBan:{
		type: String,
		required: true
	}
});

var Flight = module.exports = mongoose.model('Flights', flightSchema);

// Get Flights
module.exports.getFlights = function(callback, limit){
	Flight.find(callback).limit(limit);
}

// Get Flight
module.exports.getFlightById = function(_id, callback){
	var query = {_noiDi : _id};
	Flight.find(query, callback);
}

// Post Flight
module.exports.addFlight = function(flight, callback){
	Flight.create(flight, callback);
}
