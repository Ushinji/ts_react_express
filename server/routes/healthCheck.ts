import Router from 'express-promise-router';
import { Response } from 'express';

const router = Router();

router.use('/', async (_, res: Response) => {
  res.send(200);
});

export default router;
