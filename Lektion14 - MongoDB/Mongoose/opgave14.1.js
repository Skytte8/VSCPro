const mongoose = require('mongoose');
const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

const http = require('http');
const fetch = require('node-fetch');

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200)
        // OK
        throw new Error(respons.status);
    return await respons.json();
}

mongoose.connect('mongodb://localhost/earthquakes',
    { useNewUrlParser: true, useUnifiedTopology: true });

const earthquakeSchema = new mongoose.Schema({
    mag: Number,
    place: String,
    time: Number,
    coordinates: [Number]
});

const earthquake = mongoose.model('earthquake1', earthquakeSchema);

async function createquake(features) {
    features.sort(function (a, b) {
        return a.properties.mag - b.properties.mag;
    });
    for (feature of features) {
        if (feature.properties.mag >= 5) {
            const quake = await earthquake.create({
                mag: feature.properties.mag,
                place: feature.properties.place,
                time: feature.properties.time,
                coordinates: feature.geometry.coordinates
            });
            // console.log(quake);
        }
    }
}



async function main(earthquakeUrl) {
    try {
        earthquakes = await get(earthquakeUrl);
        await createquake(earthquakes.features)
    } catch (e) {
        console.log(e);
    }
    process.exit();
}
main(earthquakeUrl);