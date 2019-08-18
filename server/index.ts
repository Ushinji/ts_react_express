import http from 'http';
import express from 'express';
import { logger, requestLogger } from './middlewares/logger';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLogger);

app.use('/', routes);

http.createServer(app).listen(3000, (): void => {
  logger.info('Start server: port: 3000');
});
