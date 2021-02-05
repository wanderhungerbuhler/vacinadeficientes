import { getRepository } from 'typeorm';

import Rel from '../models/Rel_def_instituicao';

interface Request {
  id_instituicao: string;
  id_deficiencias: string;
  acima_de_60: string;
  de_18_a_60: string;
  de_0_a_18: string;
}

class Rel_def_instituicao {
  public async execute({
    id_instituicao,
    id_deficiencias,
    acima_de_60,
    de_18_a_60,
    de_0_a_18
  }: Request): Promise<Rel> {
    const relRepository = getRepository(Rel);

    const rel = await relRepository.create({
      id_instituicao,
      id_deficiencias,
      acima_de_60,
      de_18_a_60,
      de_0_a_18
    });

    await relRepository.save(rel);

    return rel;
  }
}

export default Rel_def_instituicao;
