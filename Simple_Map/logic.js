// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('map').setView([40.7, -94.5], 4);

//Creating a map that plots a single line and multiple lines:
//We create map object with options 
let map = L.map('map').setView([36.1733,-120.1794],5);
//coordinates for each point to used in polyline
let line = [
    [33.9416,-118.4085],
    [37.6213,-122.3790],
    [40.7899,-111.9791],
    [47.4502,-122.3088]
];
//Create a polyline using the line coordinates and make the line red
L.polyline(line,{
    color:"yellow"
}).addTo(map);

//Alternative method
// let map2 = L.map("map", {
//     center: [40.7,-94.5],
//     zoom: 4
// });

//Add Tile Layer
// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
//});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
