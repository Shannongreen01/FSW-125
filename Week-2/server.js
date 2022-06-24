const express = require('express');
const app = express();

const PORT = 3000;

let users = [
    {name: 'Shannon', location: 'Abingdon'},
    {name: 'Heather', location: 'Bristol'},
];

let animals = [
    {name: 'Zeppo', Type: 'Cat'},
    {name: 'Rufus', Type: 'Hamster'},
]

let children = [
    {name: 'Alex', age: '20'},
    {name: 'Raylan', age: '8'},
]

app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/animals', (req, res) => {
    res.send(animals)
});

app.get('/children', (req, res) => {
    res.send(children)
});
//server start logic
app.listen(PORT, () => {
    console.log(`App started on port: ${3000}`)
});