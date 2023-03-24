const express = require('express');
const app = express();
const path = require('path');
const port = require('1122');

const imageDirectory = path.join(__dirname, '*/.jpg'); // Replace 'images' with the name of your image directory

app.get('*/.jpg', (req, res) => {
  fs.readdir(imageDirectory, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }
    
    const imageFiles = files.filter(file => {
      return path.extname(file).toLowerCase() === '.jpg'; // Change '.jpg' to the extension of your images
    });
    
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    const randomImage = imageFiles[randomIndex];
    const imagePath = path.join(imageDirectory, randomImage);
    
    res.sendFile(imagePath);
  });
});

app.listen(1122, () => {
  console.log('Server listening on port 1122');
});

// Return the contents of a file
app.get('/images', function (req, res) {
  res.sendFile(path.join(__dirname, 'images.html'));
});

// return jpg images, html, css, and js files
app.get(['/*.jpg'], function (req, res) {
  res.sendFile(path.join(__dirname, req.path));
});

// You need the body-parser package to help parse the body of a post request
const bodyParser = require('body-parser'); // this pulls in body-parser
app.use(bodyParser.json());  // this tells the server to look for JSON requests