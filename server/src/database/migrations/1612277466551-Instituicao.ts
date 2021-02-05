import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class Instituicao1612277466551 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'instituicao',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome_instituicao',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'endereco',
            type: 'varchar',
          },
          {
            name: 'municipio',
            type: 'varchar',
          },
          {
            name: 'dirigente',
            type: 'varchar',
          },
          {
            name: 'telefone',
            type: 'varchar',
          },
          {
            name: 'whatsapp',
            type: 'varchar',
          },
          {
            name: 'possui_cnes',
            type: 'varchar'
          },
          {
            name: 'instituicao_possui',
            type: 'varchar'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('instituicao');
  }

}
