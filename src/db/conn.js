const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://admin-propuzzleplayer:Propuzzler@cluster0.6bsb6wp.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, family: 4 }, function(err, db) {
    if (err) console.log(err);
    else console.log("Database connected");

});