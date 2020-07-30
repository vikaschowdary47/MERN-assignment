const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5
  },
  email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
}, {
  timestamps: true,
});

const User = mongoose.model('User', user);

module.exports = User;