// opgave12.1.js
const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.static(__dirname + '/filer'));

const earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

async function get(url) {
  const respons = await fetch(url);
  if (respons.status !== 200)
    // OK
    throw new Error(respons.status);
  return await respons.json();
}

app.get('/earthquake', async (request, response) => {
  try {
    let feature = await get(earthquakeUrl);
    response.send(feature);
} catch (e) {
    if (typeof e.message === 'number')
      response.sendStatus(e.message);
    else {
      response.send(e.name + ": " + e.message);
    }
}
});

app.listen(8080);

console.log('Lytter på port 8080...');

