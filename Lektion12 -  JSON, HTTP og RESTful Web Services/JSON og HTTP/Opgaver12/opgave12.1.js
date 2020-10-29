// opgave11.2.js
const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

async function get(url) {
  const respons = await fetch(url);
  if (respons.status !== 200)
    // OK
    throw new Error(respons.status);
  return await respons.json();
}

function generateUserTable(features) {
  let html = "<table>";
  features.sort(function (a, b) {
    return a.properties.mag - b.properties.mag;
  });
  for (feature of features) {
    if (feature.properties.mag >= 5) {
      html +=
        "<tr><td>" +
        feature.properties.mag +
        "</td><td>" +
        feature.properties.place +
        "</td><td>" +
        feature.properties.time +
        "</td></tr>\n";
    }
  }
  html += "</table><br><div></div>";
  return html;
}

async function main(earthquakeUrl) {
  let earthquakes;
  try {
    earthquakes = await get(earthquakeUrl);
  } catch (fejl) {
    console.log(fejl);
  }
  document.body.innerHTML = generateUserTable(earthquakes.features);
}
main(earthquakeUrl);
