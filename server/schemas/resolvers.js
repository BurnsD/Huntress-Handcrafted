const { Soap, Order } = require('../models');

const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      }
    }
  };
  
module.exports = resolvers;