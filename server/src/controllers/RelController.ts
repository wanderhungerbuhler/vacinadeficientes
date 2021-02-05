import { Request, Response } from 'express';

import RelServices from '../services/Rel_def_instituicao';

interface RelProps {
  id_instituicao: string;
  id_deficiencias: string;
  acima_de_60: string;
  de_18_a_60: string;
  de_0_a_18: string;
}

class RelController {
  async create(request: Request, response: Response) {

    const { dados_deficientes } = request.body;

    const relService = new RelServices();

    const dadosDeficientes = dados_deficientes.map(async (RelProps: RelProps) => {
      await relService.execute({
        id_instituicao: RelProps.id_instituicao,
        id_deficiencias: RelProps.id_deficiencias,
        acima_de_60: RelProps.acima_de_60,
        de_18_a_60: RelProps.de_18_a_60,
        de_0_a_18: RelProps.de_0_a_18
      });
    });

    return response.json(dadosDeficientes);

  }
}

export default RelController;
