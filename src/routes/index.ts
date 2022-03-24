import { Router, Request, Response } from 'express';
import image_routes from './api/image';

const routes = Router();

routes.use('/', image_routes);

export default routes;
