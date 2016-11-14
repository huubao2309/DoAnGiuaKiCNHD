var mongoose = require('mongoose');

// FlightDetail Schema
var flightdetailSchema = mongoose.Schema({
	_maDatCho:{
		type: String,
		required: true
	},
	_maChuyenBay:{
		type: String,
		required: true
	},
	_ngay:{
		type: String,
		required: true
	},
	_hang:{
		type: String,
		required: true
	},
	_mucGia:{
		type: String
	},
});

var FlightDetail = module.exports = mongoose.model('FlightDetails', flightdetailSchema);

// Get FlightDetails
module.exports.getFlightDetail = function(callback, limit){
	FlightDetail.find(callback).limit(limit);
}

// Post FlightDetail
module.exports.addFlightDetail = function(flightdetail, callback){
	FlightDetail.create(flightdetail, callback);
}

// Get FlightDetail
module.exports.getFlightDetailById = function(_id, callback){
	var query = {_maDatCho: _id};
	FlightDetail.find(query, callback);
}