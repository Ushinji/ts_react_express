import Router from 'express-promise-router';
import root from './root';
import healthCheck from './healthCheck';

const routes = Router();

routes.use('/health_check', healthCheck);
routes.use('/', root);

export default routes;
