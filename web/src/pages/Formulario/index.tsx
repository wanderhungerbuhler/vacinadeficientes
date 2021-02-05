import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import { FiAlignLeft, FiPhone, FiList } from 'react-icons/fi';
import { FaRegBuilding, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

import Input from '../../components/Input';
import InputMask from '../../components/InputMask';

import { Container } from './styles';

import api from '../../services/api';

interface FormProps {
  nome_instituicao: string;
  endereco: string;
  municipio: string;
  dirigente: string;
  telefone: string;
  whatsapp: string;
  possui_cnes: string;
  instituicao_possui: string;
}

const Formulario: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async (data: FormProps) => {
    const response = await api.post('/instituicao', data);
    history.push(`/deficiencias/${response.data.id}`);

  }, []);

  return (
    <Container>
      <h1>FORMULÁRIO DE INFORMAÇÕES PARA LOGÍSTICA E ORGANIZAÇÃO DA CAMPANHA</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <Input icon={FiAlignLeft} label="Instituição" name="nome_instituicao" />
          <Input icon={FaRegBuilding} label="Endereço" name="endereco" />
          <Input icon={FiAlignLeft} label="Município" name="municipio" />
          <Input icon={CgProfile} label="Dirigente" name="dirigente" />
          <InputMask mask="(99) 9999-9999" icon={FiPhone} label="Telefone" name="telefone" />
        </div>

        <div>
          <InputMask mask="(99) 99999-9999" icon={FaWhatsapp} label="WhatsApp" name="whatsapp" />

          <label htmlFor="possui_cnes">Possui CNES?</label>
          <Input icon={AiOutlineFieldNumber} name="possui_cnes" />

          <label htmlFor="instituicao_possui">Instituição Possui?</label>
          <p>1) Ambientes de Atendimento à Saúde</p>
          <p>
            2) Contém Computador e Internet para avaliar a possibilidade ao atendimento do público-alvo
            na aplicação da vacina, inclusive no que se refere a acessibilidade.
          </p>
          <span>*Se atende os 2 itens acima, responda apenas <b>SIM</b></span>
          <span>*Em caso de não atender um dos itens acima, descreva o motivo abaixo</span>
          <Input icon={FiList} name="instituicao_possui" />

          <button type="submit">Avançar</button>
        </div>


      </Form>
    </Container>
  );
}

export default Formulario;
