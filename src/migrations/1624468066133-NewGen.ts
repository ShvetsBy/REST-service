import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewGen1624468066133 implements MigrationInterface {
    name = 'NewGen1624468066133'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE "<Task>" ALTER COLUMN "boardId" SET NOT NULL');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE "<Task>" ALTER COLUMN "boardId" DROP NOT NULL');
    }
}
