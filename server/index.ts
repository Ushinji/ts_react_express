import http from 'http';
import express from 'express';
import { logger, requestLogger } from './middlewares/logger';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLogger);

app.use('/', (_, res: express.Response): void => {
  res.render('./index.ejs');
});

http.createServer(app).listen(3000, (): void => {
  logger.info('Start server: port: 3000');
});
