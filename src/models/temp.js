const mongoose = require('mongoose');
const validator = require('validator');

const appointmentSchem = mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    Phone_number: { type: Number, required: true, length: 10 },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email");
            }
        }
    },
    date: Date,
    time: String,
    message: String,
    Visiting_for_first_time: String

});

const appointmen = mongoose.model('Appointment', appointmentSchem);
module.exports = appointmen;