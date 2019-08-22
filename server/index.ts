import http from 'http';
import express from 'express';
import { gql, ApolloServer } from 'apollo-server-express';
import { logger, requestLogger } from './middlewares/logger';
import routes from './routes';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLogger);
apolloServer.applyMiddleware({ app });

app.use('/', routes);

http.createServer(app).listen(3000, (): void => {
  logger.info('Start server: port: 3000');
});
