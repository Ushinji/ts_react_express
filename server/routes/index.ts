import Router from 'express-promise-router';
import root from './root';
import healthCheck from './healthCheck';
import api from './api';

const routes = Router();

routes.use('/api', api);
routes.use('/health_check', healthCheck);
routes.use('/', root);

export default routes;
