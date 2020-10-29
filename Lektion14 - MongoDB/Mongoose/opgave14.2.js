// opgave14.2.js
const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chat',
    { useNewUrlParser: true, useUnifiedTopology: true });

const Besked = mongoose.model('Besked', new mongoose.Schema({
    navn: String,
    rum: String,
    tekst: String,
    nr: Number
}));

app.get('/beskeder', async (request, response) => {
    response.json(await Besked.find().select('-_id -__v').exec());
});

app.get('/beskeder/:rum', async (request, response) => {
    let { rum } = request.params;
    response.json(await Besked.find().where('rum').eq(rum).select('-_id -__v').exec());
});

app.get('/rum', async (request, response) => {
    response.json(await Besked.find().distinct('rum').exec());
});

app.post('/besked', async (request, response) => {
    function ok(input) { return (input && input.length > 2) }
    let { navn, rum, tekst } = request.body;
    if (ok(navn) && ok(rum) && ok(tekst)) {
        let max = await Besked.findOne().sort('-nr').exec();
        let nr = max ? max.nr + 1 : 1;
        let besked = new Besked({ navn, rum, tekst, nr });
        await besked.save();
        response.status(201).json({ resultat: 'Besked gemt!' })
    } else {
        response.status(406).send('For lidt tekst!');
    };
});

app.delete('/besked/:nr', async (request, response) => {
    let { nr } = request.params;
    let resultat = await Besked.deleteOne().where('nr').eq(nr).exec();
    if (resultat.deletedCount === 1)
        response.status(200).json({ resultat: 'Besked slettet!' });
    else
        response.status(404).send('Besked findes ikke!');
});

app.listen(8080);

console.log('Lytter på port 8080 ...');
