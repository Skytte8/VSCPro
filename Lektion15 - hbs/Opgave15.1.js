const express = require('express');
const app = express();
const fetch = require('node-fetch');
const hbs = require('hbs');
const fs = require('fs').promises

app.set('view engine', 'hbs');
app.set('views', __dirname + '/templates');
app.use(express.static(__dirname + '/filer2'));

app.get('/', async (request, response) => {
    try {
        let fil = await fs.readdir(__dirname + '/filer2');
        response.render('index.hbs', {
            fil
        });
    } catch (e) {
        if (typeof e.message === 'number')
            response.sendStatus(e.message);
        else {
            response.send(e.name + ": " + e.message);
        }
    }
});

app.listen(8080);

console.log('Lytter på port 8080 ...');