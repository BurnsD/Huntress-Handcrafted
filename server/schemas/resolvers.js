const { Soap, Order } = require('../models/index');

const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      }
    }
  };
  
module.exports = resolvers;