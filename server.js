const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./server/routes');

if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})

