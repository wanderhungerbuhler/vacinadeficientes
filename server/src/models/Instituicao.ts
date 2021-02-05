import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn } from 'typeorm';

@Entity('instituicao')
class Instituicao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome_instituicao: string;

  @Column()
  endereco: string;

  @Column()
  municipio: string;

  @Column()
  dirigente: string;

  @Column()
  telefone: string;

  @Column()
  whatsapp: string;

  @Column()
  possui_cnes: string;

  @Column()
  instituicao_possui: string;
}

export default Instituicao;
