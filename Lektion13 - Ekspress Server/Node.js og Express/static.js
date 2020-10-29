// static.js
const express = require('express');
const app = express();

app.use(express.static('filer'));

app.get('/*', function (request, response) {
    response.sendStatus(404); // Not Found
});

app.listen(8080);

console.log('Lytter på port 8080 ...');