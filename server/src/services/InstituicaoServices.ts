import { getRepository } from 'typeorm';

import Instituicao from '../models/Instituicao';

interface Request {
  nome_instituicao: string;
  endereco: string;
  municipio: string;
  dirigente: string;
  telefone: string;
  whatsapp: string;
  possui_cnes: string;
  instituicao_possui: string;
}

class InstituicaoServices {
  public async execute({
    nome_instituicao,
    endereco,
    municipio,
    dirigente,
    telefone,
    whatsapp,
    possui_cnes,
    instituicao_possui
  }: Request): Promise<Instituicao> {
    const instituicaoRepository = getRepository(Instituicao);

    const instituicao = await instituicaoRepository.create({
      nome_instituicao,
      endereco,
      municipio,
      dirigente,
      telefone,
      whatsapp,
      possui_cnes,
      instituicao_possui
    });

    await instituicaoRepository.save(instituicao);

    return instituicao;

  }
}

export default InstituicaoServices;
