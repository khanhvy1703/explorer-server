import { ApolloServer } from '@apollo/server';
import { readFileSync } from 'fs';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = readFileSync('./src/typeDefs/restaurants.graphql', { encoding: 'utf-8' });

const mock = [
  {
    restaurantId: '2242423',
    name: 'fsdfdsfs',
    rating: '4.5',
    price: '$$$$'
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    restaurants: () => mock,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
