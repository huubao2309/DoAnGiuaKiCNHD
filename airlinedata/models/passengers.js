var mongoose = require('mongoose');

// Passenger Schema
var passengerSchema = mongoose.Schema({
	_maDatCho : {
		type: String,
		required: true
	},
	_danhXung : {
		type: String,
		required: true
	},
	_ho: {
		type: String,
		required: true
	},
	_ten : {
		type: String,
		required: true
	}
});

var Passenger = module.exports = mongoose.model('Passengers', passengerSchema);

// Get Passenger
module.exports.getPassengers = function(callback, limit){
	Passenger.find(callback).limit(limit);
}

// Post Passenger
module.exports.addPassenger = function(passenger, callback){
	Passenger.create(passenger, callback);
}
