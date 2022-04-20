const express = require('express');
const patrh = require('path');

const db = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(imagelocaiton, express.static())

app.use(require('./routes'));


app.use('/images', express.static(path.join(__dirname, '../client/images')));


app.listen(PORT, () => console.log(`connected on localhost:${PORT}`));
