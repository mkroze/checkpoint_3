const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(
    "mongodb://localhost/subscribers",
    {
        useNewUrlParser:true
    }
)
const db = mongoose.connection;

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to Database'))

const port = 3000;
app.listen( port, () => { console.log('server has started'); } )