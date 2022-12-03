const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    Phone_number: { type: Number, required: true, length: 10 },
    email: {
        type: String,
        required: true,

    },
    message: String
});

const contact = mongoose.model('Contact', contactSchema);
module.exports = contact;