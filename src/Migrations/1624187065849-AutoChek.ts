import {MigrationInterface, QueryRunner} from "typeorm";

export class AutoChek1624187065849 implements MigrationInterface {
    name = 'AutoChek1624187065849'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Location" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "website" character varying, "phone" character varying NOT NULL, "contact_persion" character varying, "center_location" boolean DEFAULT false, "lon" numeric NOT NULL, "lat" numeric NOT NULL, CONSTRAINT "PK_d0125e359cde2707aec388b9c59" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Location"`);
    }

}
