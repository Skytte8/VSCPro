const mongoose = require('mongoose');

const Besked = require('../models/Besked');

const config = require('../config');

mongoose.connect('mongodb://localhost/chat', { useNewUrlParser: true, useUnifiedTopology: true });


exports.createBesked = function (navn, rum, tekst, nr) {
    return Besked.create({
        navn,
        rum,
        tekst,
        nr
    });
};

exports.getBeskeder = function () {
    return Besked.find().populate('beskeder').exec();
}

exports.getBesked = function(beskedID){    
    return Besked.findById(beskedID).exec();
}