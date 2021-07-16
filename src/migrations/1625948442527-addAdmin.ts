import { MigrationInterface, QueryRunner } from 'typeorm';

export class Admin1625948442527 implements MigrationInterface {
  name = 'Admin1625948442527';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO public."<User>" (name, login, password) VALUES ('admin', 'admin', '$2b$10$6OdcQEvp7V5KYmTYMdjVm.i8xZnWtTdG1s8oZRJRRn11te7io1Iuq')`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM public."<User>" WHERE login='admin'`);
  }
}
