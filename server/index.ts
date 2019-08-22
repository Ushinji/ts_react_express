import http from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { logger, requestLogger } from './middlewares/logger';
import routes from './routes';
import resolvers from './resolvers';
import schema from './schema';

const apolloServer = new ApolloServer({ typeDefs: schema, resolvers });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLogger);
apolloServer.applyMiddleware({ app });

app.use('/', routes);

http.createServer(app).listen(3000, (): void => {
  logger.info('Start server: port: 3000');
});
