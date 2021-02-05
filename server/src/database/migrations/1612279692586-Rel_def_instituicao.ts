import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class RelDefInstituicao1612279692586 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'rel_def_instituicao',
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
              name: 'id_instituicao',
              type: 'uuid',
            },
            {
              name: 'id_deficiencias',
              type: 'uuid',
            },
            {
              name: 'acima_de_60',
              type: 'varchar',
            },
            {
              name: 'de_18_a_60',
              type: 'varchar',
            },
            {
              name: 'de_0_a_18',
              type: 'varchar'
            }
          ]
        })
      );

      await queryRunner.createForeignKey(
        'rel_def_instituicao',
        new TableForeignKey({
          name: 'RelInstituicao',
          columnNames: ['id_instituicao'],
          referencedColumnNames: ['id'],
          referencedTableName: 'instituicao',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        })
      );

      await queryRunner.createForeignKey(
        'rel_def_instituicao',
        new TableForeignKey({
          name: 'RelDeficiencias',
          columnNames: ['id_deficiencias'],
          referencedColumnNames: ['id'],
          referencedTableName: 'deficiencias',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        })
      );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('id_instituicao', 'RelInstituicao');
      await queryRunner.dropForeignKey('id_deficiencias', 'RelDeficiencias');
      await queryRunner.dropTable('rel_def_instituicao');
    }

}
