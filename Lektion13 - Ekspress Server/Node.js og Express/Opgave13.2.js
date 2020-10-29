// expressServer.js
const express = require('express');
const app = express();
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const http = require('http');
const fetch = require('node-fetch');

app.get('/', async (request, response) => {
    try {
        let user = await get(userUrl)
        let html = genererTabel(user);
        response.send(html);
    }
    catch (error) { 
        response.send(error);
    }
});

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}


app.listen(8080);

console.log('Lytter på port 8080 ...');

function genererTabel(users) {
    let html = '<table>';
    for (user of users) {
        html +=
            '<tr><td>' + user.id +
            '</td><td>' + user.name +
            '</td><td>' + user.company.name +
            '</td></tr>\n';
    }
    html += '</table>';
    return html;
}