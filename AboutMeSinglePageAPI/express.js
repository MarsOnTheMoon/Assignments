const express = require('express');
const app = express();
const port = 3051;

const path = require('path')

// Start listening for requests on the designated port
// This can be at the beginning, or the end, or in-between
// Conventionally this is put at the end
let server = app.listen(port, function() {
   console.log('App server is running on port', port);
   console.log('to end press Crtl + c'); 
});

/* This code sends a file (containing the HTML for a web page) */
app.get(['/*.jpg', '/*.css', '/*.html', '/*.js'], function (req, res) {
res.sendFile(path.join (__dirname, req.path, 'aboutmegrid.html'));

});

// Route for the home page
app.get('/', function(req, res) {
    res.send(`
        <h1>About Marjorie "Mars" Preval</h1>
    `);
});

// Route for link 1
app.get('/aboutmegrid', function (req, res) {
    res.sendFile(path.join(__dirname, 'aboutmegrid.html'));
});

// Route for link 2
app.get('/links', function (req, res) {
    res.sendFile(path.join(__dirname, 'links.html'));
});

// Route for link 3
app.get('/travel', function (req, res) {
    res.sendFile(path.join(__dirname, 'travel.html'));
});