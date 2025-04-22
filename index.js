/**
 * Copyright 2025 MusicLibraryManagementWebApp
 * All rights reserved.
 *
 */

var bodyParser = require('body-parser');
var XM = require('xhr2');
var express = require('express');
var app = express();
var xhub = require('express-x-hub');
var cors=require('cors')
var session=require('express-session')
var path = require('path')

// Setting up the session
app.use(session({
    secret:"musiclibrary",
    resave: false,
    saveUninitialized: false
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(cors())

var received_updates = [];
const port = 4000

app.get('/', async (req, res, next) => {
    res.sendFile(__dirname + '/views/login/index.html');
});

app.get('/', async (req, res, next) => {
    res.sendFile(__dirname + '/views/dashboard/index.html');
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

