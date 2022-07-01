const express = require('express');
const recycledItemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

// Recyclyed items array.
const recycledItems = [{name: "CardBoard",desc: "Constructed from paper.",recyclable: true,quantity: 985,ppu: .05,_id: uuidv4()}];

recycledItemsRouter 
    .get('/', (req, res) => {res.send(recycledItems)})

    .post ('/add', (req, res) => {
        const newRecycledItem = req.body;
        newRecycledItem._id = uuidv4();
        recycledItems.push(newRecycledItem);
        console.log(recycledItems);
        res.send(`Successfully added ${newRecycledItem.name} to the database.`);
    })

module.exports = recycledItemsRouter;