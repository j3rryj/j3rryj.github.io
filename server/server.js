const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
const mediumController = require('./../database/controllers/mediumController.js')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + './../')); // serves index.html
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + './../index.html'));
})

app.get('/webdev.jpg', (req, res) => {
  res.sendFile(path.join(__dirname + 'webdev.jpg'))
})

// app.get('/grabbing/blogs/rah', mediumController.getBlogs);
// app.get('/api/medium', mediumController.findBlogs);

app.listen(port, () => {
  console.log('App now listening on ' + port)
})