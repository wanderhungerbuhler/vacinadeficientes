import { Router } from 'express';

import DeficienciasController from '../controllers/DeficienciasController';

const instituicaoRouter = Router();

const deficientesController = new DeficienciasController();

instituicaoRouter.get('/', deficientesController.index);
instituicaoRouter.post('/', deficientesController.create);

export default instituicaoRouter;
