import { Entity, PrimaryGeneratedColumn, Column  } from 'typeorm';

@Entity('deficiencias')
class Deficiencias {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tipos_deficiencias: string;
}

export default Deficiencias;
