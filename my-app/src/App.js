
const express = require('express');
const app = express();

const PORT = 3000;

let users = [
    {name: 'Shannon', location: 'Abingdon'},
];

let cars = [
    {name: 'Jeep', type: 'Wrangler'},
];

let hobby = [
    {name: 'art', type: 'digital'},
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/cars', (req, res) => {
    res.send(cars);
});

app.get('/hobby', (req, res) => {
    res.send(hobby);
});

//server start logic
app.listen(PORT, () => {
    console.log(`Our first server: ${PORT}`)
});


