var mongoose = require('mongoose');

// Airport Schema
var airportSchema = mongoose.Schema({
	_maNoiDi:{
		type: String,
		required: true
	},
	_tenNoiDi:{
		type: String,
		required: true
	}
});

var Airport = module.exports = mongoose.model('Airports', airportSchema);


// Get Airports
module.exports.getAirports = function(callback, limit){
	Airport.find(callback).limit(limit);
}

// Post FlightDetail
module.exports.addAirports = function(airport, callback){
	Airport.create(airport, callback);
}
