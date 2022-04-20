const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 4000;
const app = express();

const startServer = async () => {
    // This imports our typeDefs and resolvers into the Apollo server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    // New Apollo requires an asynchronous server initialization to work
    await server.start();

    // Playground url
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

// Initializing the startServer function so it launches ApolloServer
startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Opens the database only once
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});