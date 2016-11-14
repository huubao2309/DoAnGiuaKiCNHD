var mongoose = require('mongoose');

// Booking Schema
var bookingSchema = mongoose.Schema({
	_maDatCho:{
		type: String,
		required: true
	},
	_thoiGianDatCho:{
		type: String,
		required: true
	},
	_tongTien:{
		type: String,
	},
	_trangThai:{
		type: String,
	}
});

var Booking = module.exports = mongoose.model('Bookings', bookingSchema);

// Get Bookings
module.exports.getBookings = function(callback, limit){
	Booking.find(callback).limit(limit);
}

// Post Booking
module.exports.addBooking = function(booking, callback){
	Booking.create(booking, callback);
}

// Put Booking
module.exports.updateBooking = function(_id, booking, options, callback){
	var query = {_maDatCho : _id};
	var update = {
		_maDatCho: booking._maDatCho,
		_thoiGianDatCho: booking._thoiGianDatCho,
		_tongTien: booking._tongTien,
		_trangThai: booking._trangThai
	}
	Booking.findOneAndUpdate(query, update, options, callback);

}