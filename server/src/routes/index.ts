import { Router } from 'express';

import instituicaoRouter from './instituicao.routes';
import deficienciasRouter from './deficiencias.routes';
import relRouter from './rel.routes';

const routes = Router();

routes.use('/instituicao', instituicaoRouter);
routes.use('/deficiencias', deficienciasRouter);
routes.use('/rel', relRouter);

export default routes;
