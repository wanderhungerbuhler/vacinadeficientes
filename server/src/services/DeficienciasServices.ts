import { getRepository } from 'typeorm';

import Deficiencias from '../models/Deficiencias';

interface Request {
  tipos_deficiencias: string;
}

class DeficienciasServices {
  public async execute({ tipos_deficiencias }: Request): Promise<Deficiencias> {
    const deficienciasRepository = getRepository(Deficiencias);

    const deficiencias = await deficienciasRepository.create({
      tipos_deficiencias
    });

    await deficienciasRepository.save(deficiencias);

    return deficiencias;

  }
}

export default DeficienciasServices;
