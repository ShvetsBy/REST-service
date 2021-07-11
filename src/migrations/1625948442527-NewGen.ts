import {MigrationInterface, QueryRunner} from "typeorm";

export class NewGen1625948442527 implements MigrationInterface {
    name = 'NewGen1625948442527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "<Task>" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "order" integer NOT NULL, "description" character varying NOT NULL, "userId" character varying, "columnId" character varying, "boardId" character varying NOT NULL, CONSTRAINT "PK_74232f27e29bb9ece18fbcd6e04" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "<Board>" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "columns" jsonb, CONSTRAINT "PK_165ff9b0269789e551f0116ba3a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "<User>" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "login" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_1b23a70c986a109af0f108b6a00" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "<User>"`);
        await queryRunner.query(`DROP TABLE "<Board>"`);
        await queryRunner.query(`DROP TABLE "<Task>"`);
    }

}
