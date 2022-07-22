const express = require('express');
const itemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const items = [
    {
        name: 'Princess Bride',
        type: 'Movie',
        price: 20,
        _id: uuidv4()
    },
    {
        name: 'Office Space',
        type: 'movie',
        price: 20,
        _id: uuidv4()
    },
    {
        name: 'Star Wars',
        type: 'movie',
        price: 20,
        _id: uuidv4()
    },

];

itemsRouter
    .get('/', (req, res) => {
        res.status(200);
        res.send(items);
    })

    .get('/:itemType', (req, res) => {
        const itemType = req.params.itemType;
        const matches = items.filter((item) => item.type === itemType);
        console.log(matches)
        res.status(200);
        res.send(matches);
    })

    .get('/search/type', (req, res) => {
        const queryType = req.query.type;
        console.log(queryType)
        const someMatches = items.filter((item) => item.type === queryType);
        res.status(200);
        res.send(someMatches);
    })

module.exports = itemsRouter;
