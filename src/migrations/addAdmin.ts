import { MigrationInterface, QueryRunner } from 'typeorm';

export class Admin implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO public."user" (login, name, password) VALUES ('admin', 'admin', '$2b$10$6OdcQEvp7V5KYmTYMdjVm.i8xZnWtTdG1s8oZRJRRn11te7io1Iuq')`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM public."user" WHERE login='admin'`);
  }
}
