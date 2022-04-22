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
    price: 2.99,
    ingredients: ['lilac','honeysuckle']
    },
    {
    name: 'Red Soap',
    description: 'Smelly Bad Kind',
    image: 'soapys2.jpg',
    quantity: 300,
    price: 5.99,
    ingredients: ['blood','Sandlewood']
    },
    {
        name: 'Green Soap',
        description: 'Smelly Bad Kind',
        image: 'soapys2.jpg',
        quantity: 300,
        price: 5.99,
    ingredients: ['grass','lizards']
    }
    ]);

    console.log('we got soaps');

    await User.deleteMany();

    await User.create({
        firstName: 'Dave',
        lastName: 'Bautista',
        email: 'thedestroyer@gmail.com',
        password: 'password1234',
        orders: [
          {
            soaps: [soaps[0]._id, soaps[0]._id, soaps[1]._id]
          }
        ]
      });
    
      await User.create({
        firstName: 'Jesus',
        lastName: 'Christ',
        email: 'holeylord@gmail.com',
        password: 'godboy1234',
        orders: [
            {
              soaps: [soaps[0]._id, soaps[0]._id, soaps[1]._id]
            }
          ]

      });
    
      console.log('users seeded');
    
      process.exit();
})

