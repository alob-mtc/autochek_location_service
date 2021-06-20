"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoChek1624187065849 = void 0;
class AutoChek1624187065849 {
    constructor() {
        this.name = 'AutoChek1624187065849';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "Location" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "website" character varying, "phone" character varying NOT NULL, "contact_persion" character varying, "center_location" boolean DEFAULT false, "lon" numeric NOT NULL, "lat" numeric NOT NULL, CONSTRAINT "PK_d0125e359cde2707aec388b9c59" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "Location"`);
    }
}
exports.AutoChek1624187065849 = AutoChek1624187065849;
//# sourceMappingURL=1624187065849-AutoChek.js.map