import { Router } from 'express';

import InstituicaoController from '../controllers/InstituicaoControllers';

const instituicaoRouter = Router();

const instituicaoController = new InstituicaoController();

instituicaoRouter.post('/', instituicaoController.create);

export default instituicaoRouter;
