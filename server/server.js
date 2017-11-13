const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + './../')); // serves index.html

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + './../index.html'));
})


app.use('*', express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log('App now listening on ' + port)
})