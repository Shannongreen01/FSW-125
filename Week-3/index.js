
const { v4: uuidv4 } = require('uuid');
const express = require("express");
const app = express();
const PORT = 3000;
const recycledItemsRouter = require('./recycledItemsRouter');

// Middleware.
app.use(express.json());

// Requires router for recycled items, setting endpoint for get request.
app.use('/recycled-items', recycledItemsRouter);

// Server startup.
app.listen(PORT, () => {
    console.log('Server has been started on port: 3000')
})