import Router from 'express-promise-router';
import { Response } from 'express';

const router = Router();

router.use('/', async (_, res: Response) => {
  // res.json({ result: 'error' }).send(400);
  setTimeout(() => {
    res.json({ result: 'success' });
  }, 5000);
});

export default router;
