import { Router } from 'express';

import RelController from '../controllers/RelController';

const RelRouter = Router();

const relController = new RelController();

RelRouter.post('/', relController.create);

export default RelRouter;
