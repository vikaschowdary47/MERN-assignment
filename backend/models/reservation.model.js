const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    username: {type:String, required:true},
    table: {type:Number, required:true},
    date: {type:Date, required:true},
    time: {type:Number, required:true},
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;