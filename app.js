const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// eslint-disable-next-line no-unused-vars
const db = mongoose.connect('mongodb://localhost/booksAPI');
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ encoded: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my nodemon API');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`running on port ${port}`);
});
