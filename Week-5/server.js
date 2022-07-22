const { v4: uuidv4 } = require('uuid');
const express = require("express");
const app = express();
const morgan = require('morgan');
const cors = require('cors');
// constructing the PORT to use
const PORT = 5000;// will run on PORT 5000
const recycledItemsRouter = require('./routes/recycledItemsRouter');

// Middleware.
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: '*'
}));

// Requires router for recycled items, setting endpoint for get request.
app.use('/recycled-items', recycledItemsRouter);

// Server startup.
app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`)
});
