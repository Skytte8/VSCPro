// opgave14.2.js
const express = require('express');
const app = express();
const config = require('./config');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use('/besked', require('./routes/besked'));

// app.get('/beskeder/:rum', async (request, response) => {
//     let { rum } = request.params;
//     response.json(await Besked.find().where('rum').eq(rum).select('-_id -__v').exec());
// });

// app.get('/rum', async (request, response) => {
//     response.json(await Besked.find().distinct('rum').exec());
// });


const port = config.localPort; // Heroku
app.listen(port);
console.log('Listening on port ' + port + ' ...');

module.exports = app; // test
