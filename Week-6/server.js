const express = require('express');
const app = express();
const morgan = require('morgan');

const PORT = 3002;
const itemsRouter = require('./routes/itemsRouter');

// Middle Ware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/items', itemsRouter);

// Startup logic
app.listen(PORT, () => {
    console.log('Server started on port: 3002!')
}); 