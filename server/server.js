const express = require('express');
const path = require('path');
const images = require('../client/public/images');
const db = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(images, express.static())

app.use(require('./routes'));

app.use('/images', express.static(path.join(__dirname, '../client/images')));

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
