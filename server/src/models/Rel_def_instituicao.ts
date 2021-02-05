import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn  } from 'typeorm';

import Instituicao from './Instituicao';
import Deficiencias from './Deficiencias';

@Entity('rel_def_instituicao')
class Rel_def_instituicao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  id_instituicao: string;

  @ManyToMany(() => Instituicao, (instituicao) => instituicao.id)
  @JoinColumn({ name: 'id_instituicao' })
  id_rel_instituicao: Instituicao;

  @Column()
  id_deficiencias: string;

  @ManyToMany(() => Deficiencias, (deficiencias) => deficiencias.id)
  @JoinColumn({ name: 'id_instituicao' })
  id_rel_deficiencias: Instituicao;

  @Column()
  acima_de_60: string;

  @Column()
  de_18_a_60: string;

  @Column()
  de_0_a_18: string;
}

export default Rel_def_instituicao;
