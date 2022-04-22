const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Soap {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
  }
  type Order {
    _id: ID
    purchaseDate: string
    purchased:[Soap]
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }
`;

// export the typeDefs
module.exports = typeDefs;