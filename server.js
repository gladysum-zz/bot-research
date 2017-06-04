'use strict';

const express = require('express');
const app = express();
const {resolve} = require('path')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const dotenv = require('dotenv');

// Serve static files from ../public
app.use(express.static(resolve(__dirname, 'public')));

// Send index.html for anything else.
app.get('/*', (_, res) => res.sendFile(resolve(__dirname, 'public', 'index.html')));

app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});

// Return dummy data to the front end for testing
app.post('/', (req, res, next)=> {
  let topic = req.body.input.toUpperCase();
    let output = {
      "1": {
        "title": `First Article About ${topic}`,
        "author": "Jane Awesome Researcher-Developer",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa ex, sagittis eget efficitur ac, convallis ac massa. Aenean at dolor eu ex egestas placerat in vel justo.",
        "titleURL": "https://github.com/gladysum",
        "authorURL": "https://github.com/gladysum"
      },
      "2": {
        "title": `Second Article About ${topic}`,
        "author": "Alice Amazing Scholar-Engineer",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa ex, sagittis eget efficitur ac, convallis ac massa. Aenean at dolor eu ex egestas placerat in vel justo.",
        "titleURL": "https://github.com/gladysum",
        "authorURL": "https://github.com/gladysum"
      },
      "3": {
        "title": `Third Article About ${topic}`,
        "author": "Chloe Brilliant Scientist-Programmer",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa ex, sagittis eget efficitur ac, convallis ac massa. Aenean at dolor eu ex egestas placerat in vel justo.",
        "titleURL": "https://github.com/gladysum",
        "authorURL": "https://github.com/gladysum"
      },
      "4": {
        "title": `Fourth Article About ${topic}`,
        "author": "Carmen Genius Inventor-Coder",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa ex, sagittis eget efficitur ac, convallis ac massa. Aenean at dolor eu ex egestas placerat in vel justo.",
        "titleURL": "https://github.com/gladysum",
        "authorURL": "https://github.com/gladysum"
      }}
res.send(output);
});

