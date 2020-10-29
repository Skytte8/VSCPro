// expressServer.js
const express = require('express');
const app = express();
const fs = require('fs').promises;

app.all('/', async (request, response) => {
    let fil = await fs.readdir(__dirname + '/filer');
    let html = genererLinks(fil);
    response.send(html);
});

app.get('/:navn', async (request, response) => {
    try {
        let myFile = __dirname + '/filer/' + request.params.navn
        response.sendFile(myFile);
    } catch (error) {
        response.send(error);
    }
});


app.listen(8080);

console.log('Lytter på port 8080 ...');

function genererLinks(filnavne) {
    let html = '';
    for (let filnavn of filnavne) {
        html += '<a href="' + filnavn + '">' + filnavn + '</a><br>\n';
    }
    return html;
}