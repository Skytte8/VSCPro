// testApp.js
const express = require('express');
const app = express();
const fetch = require('node-fetch');

// exports til test
exports.app = app;
exports.genererUserTabel = genererUserTabel;
exports.get = get;

app.use(express.json());

let usersUrl = 'https://jsonplaceholder.typicode.com/users';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

function genererUserTabel(users) {
    let html = '<table>';
    for (user of users) {
        html += '<tr><td>' + user.id +
            '</td><td>' + user.name +
            '</td><td>' + user.company.name +
            '</td></tr>\n';
    }
    html += '</table>';
    return html;
}

app.get('/', async (request, response) => {
    try {
        let users = await get(usersUrl);
        let html = genererUserTabel(users);
        response.send(html);
    } catch (e) {
        if (typeof e.message === 'number')
            response.sendStatus(e.message);
        else {
            response.send(e.name + ": " + e.message);
        }
    }
});

app.get('/json', async (request, response) => {
    try {
        let users = await get(usersUrl);
        response.send(users);
    } catch (e) {
        if (typeof e.message === 'number')
            response.sendStatus(e.message);
        else {
            response.send(e.name + ": " + e.message);
        }
    }
});

app.post('/', (request, response) => {
    response.send(request.body);
});

app.listen(8080);

console.log('Lytter på port 8080 ...');