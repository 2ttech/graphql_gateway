import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const port = process.env.APOLLO_PORT || 4000;
const supergraphSchema = ''; // TODO!

const gateway = new ApolloGateway({
    supergraphSdl: supergraphSchema,
});

const server = new ApolloServer({
    gateway,
    // Subscriptions are unsupported but planned for a future Gateway version.
    subscriptions: false
})

server.listen({port: port}).then(({ url }) => {
    console.log(`🚀 Gateway ready at ${url}`);
}).catch(err => { console.error(err)});
