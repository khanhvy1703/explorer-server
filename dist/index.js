import { ApolloServer } from '@apollo/server';
import { readFileSync } from 'fs';
import { startStandaloneServer } from '@apollo/server/standalone';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config();
const baseURL = 'https://api.yelp.com/v3';
const { YELP_API_KEY } = process.env;
const mock = [
    {
        restaurantId: '2242423',
        name: 'fsdfdsfs',
        rating: '4.5',
        price: '$$$$'
    },
];
const resolvers = {
    Query: {
        restaurants: async (parent, args) => {
            const { location } = args;
            const res = await fetch(`${baseURL}/businesses/search?location=${location}`, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + YELP_API_KEY }
            }).then(res => res.json());
            const data = res.businesses[0];
            const { id, name, rating, price } = data;
            return [{
                    restaurantId: id,
                    name,
                    rating,
                    price,
                }];
        }
    }
};
const typeDefs = readFileSync('./src/typeDefs/restaurants.graphql', { encoding: 'utf-8' });
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
//# sourceMappingURL=index.js.map