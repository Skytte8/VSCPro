// handlebars.js
const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.static(__dirname + '/filer'));

let userUrl = 'https://jsonplaceholder.typicode.com/users';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

app.get('/users', async (request, response) => {
    try {
        let users = await get(userUrl);
        response.send(users);
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