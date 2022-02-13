require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || 8000;

const db = require('./config/mongoose');

const app = express();

// body parser
app.use(express.urlencoded());

// use express router
app.use('/', require('./routes/index'));

app.listen(PORT, function(err){
    if(err){
        console.log('error', err);
        return;
    }
    console.log('server is running on port', PORT);
})