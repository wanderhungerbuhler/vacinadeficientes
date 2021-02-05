import { Request, Response } from 'express';

import InstituicaoServices from '../services/InstituicaoServices';

import Rel from '../services/Rel_def_instituicao';

class InstituicaoControllers {
  async create(request: Request, response: Response) {
    const {
      nome_instituicao,
      endereco,
      municipio,
      dirigente,
      telefone,
      whatsapp,
      possui_cnes,
      instituicao_possui
    } = request.body;

    const createInstituicao = new InstituicaoServices();

    const instituicao = await createInstituicao.execute({
      nome_instituicao,
      endereco,
      municipio,
      dirigente,
      telefone,
      whatsapp,
      possui_cnes,
      instituicao_possui
    });

    return response.json(instituicao);

  }
}

export default InstituicaoControllers;
