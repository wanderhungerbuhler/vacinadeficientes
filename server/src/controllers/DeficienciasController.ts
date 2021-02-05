import { Request, Response } from 'express';

import Deficientes from '../models/Deficiencias';

import { getRepository } from 'typeorm';

import DeficienciasServices from '../services/DeficienciasServices';

class DeficienciasController {
  async index(request: Request, response: Response) {
    const indexDeficientes = getRepository(Deficientes);

    const deficientes = await indexDeficientes.find();

    return response.json(deficientes);
  }

  async create(request: Request, response: Response) {
    const { tipos_deficiencias  } = request.body;

    const createDeficiencias = new DeficienciasServices();

    const deficiencias = await createDeficiencias.execute({
      tipos_deficiencias,
    });

    return response.json(deficiencias);

  }
}

export default DeficienciasController;
