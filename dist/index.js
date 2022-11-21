import { ApolloServer } from '@apollo/server';
import { readFileSync } from 'fs';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolvers/resolvers.js';
import * as dotenv from 'dotenv';
dotenv.config();
const typeDefs = readFileSync('./src/typeDefs/restaurants.graphql', { encoding: 'utf-8' });
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
//# sourceMappingURL=index.js.map