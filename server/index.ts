import http from 'http';
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  '/',
  (_, res: express.Response): void => {
    res.render('./index.ejs');
  },
);

http.createServer(app).listen(
  3000,
  (): void => {
    console.log('Start server: port: 3000'); // eslint-disable-line no-console
  },
);
