const db = require('./connection');
const { User, Soap } = require('../models');

db.once('open', async () => {
    await Soap.deleteMany();

    const soaps = await Soap.insertMany([
    {
    name: 'Blue Soap',
    description: 'Smelly Good Kind',
    image: 'soapys.jpg',
    quantity: 100,
    price: 2.99
    },
    {
    name: 'Blue Soap',
    description: 'Smelly Good Kind',
    image: 'soapys.jpg',
    quantity: 100,
    price: 2.99
    },
    {
    name: 'Blue Soap',
    description: 'Smelly Good Kind',
    image: 'soapys.jpg',
    quantity: 100,
    price: 2.99
    },

    ])
})

