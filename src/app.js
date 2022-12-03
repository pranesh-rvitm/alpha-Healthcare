const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require("./db/conn");
const hbs = require('hbs');
const { registerPartial, registerPartials } = require('hbs');
const app = express();
const port = process.env.PORT || 3000



const appointment = require("./models/appointmentSchema");
const contact = require('./models/contactSchema');
//setting static path
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use(express.static(staticpath));
app.set('view engine', 'hbs');
app.set("views", templatepath);
hbs.registerPartials(partialpath);

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/home", function(req, res) {
    res.render("index");
});

app.get("/aboutUs", function(req, res) {
    res.render("about");
});

app.get("/doctors", function(req, res) {
    res.render("doctors");
});
app.get("/Appointment", function(req, res) {


    res.render("appointment");
});

app.post("/appointment", async function(req, res) {
    try {
        console.log("got body", req.body);
        const appointmentData = new appointment(req.body);
        appointmentData.save();
        res.status(201).render("appointment", { statusOfAppointment: 'APPOINTMENT BOOKED SUCCESSFULLY', status: true });
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get("/contact", function(req, res) {
    res.render("contact");
});
app.post("/contact", function(req, res) {
    try {
        console.log("got body", req.body);
        const contactData = new contact(req.body);
        contactData.save();
        res.status(201).render("contact", { statusOfAppointment: " We will get in touch with you soon", status: true });
    } catch (error) {
        res.status(500).send(error);
    }
})



app.listen(port, function() {
    console.log("listening on port 3000");
});