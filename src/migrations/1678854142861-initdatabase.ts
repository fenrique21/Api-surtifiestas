import { MigrationInterface, QueryRunner } from "typeorm";

export class initdatabase1678854142861 implements MigrationInterface {
    name = 'initdatabase1678854142861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "venta" ("id" integer NOT NULL, "id_user" integer NOT NULL, "estado" boolean NOT NULL, "name_cliente" character varying(80), "date" date NOT NULL, "total" double precision NOT NULL, "descuento" double precision, CONSTRAINT "PK_8bb53d01fe72521d5cfb1f149d4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "detalle_venta" ("id" integer NOT NULL, "id_producto" integer NOT NULL, "id_venta" integer NOT NULL, "cantidad" integer NOT NULL, "precio" double precision NOT NULL, "ventaId" integer, "productoId" integer, CONSTRAINT "PK_15e83370f604ee4b71e7299514e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "precio" ("id" integer NOT NULL, "preciounidad" double precision NOT NULL, "preciociento" double precision, "preciomillar" double precision, "productoId" integer, CONSTRAINT "PK_5519b6f024c7ba63cf96128628a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "producto" ("id" integer NOT NULL, "name" character varying NOT NULL, "code" character varying, "description" text, "cantidad" integer NOT NULL, "categoryId" integer, CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "detalle_compra" ("id" integer NOT NULL, "id_producto" integer NOT NULL, "id_venta" integer NOT NULL, "cantidad" integer NOT NULL, "precio" double precision NOT NULL, "compraId" integer, "productoId" integer, CONSTRAINT "PK_51069b2e39319e34986637f364a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "proveedor" ("id" integer NOT NULL, "name" character varying NOT NULL, "code" character varying(6) NOT NULL, "telefono" character varying, "direction" character varying(120) NOT NULL, CONSTRAINT "PK_405f60886417ece76cb5681550a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "compra" ("id" integer NOT NULL, "id_user" integer NOT NULL, "nfactura" character varying(15) NOT NULL, "estado" boolean NOT NULL, "date" date NOT NULL, "total" double precision NOT NULL, "proveedorId" integer, CONSTRAINT "PK_1282735aa02eaee06c0e1b5da41" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" ADD CONSTRAINT "FK_8c7cdd27dfaecb574ad82c10ac5" FOREIGN KEY ("ventaId") REFERENCES "venta"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" ADD CONSTRAINT "FK_78594dc095d33f11673cef98da2" FOREIGN KEY ("productoId") REFERENCES "producto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "precio" ADD CONSTRAINT "FK_6dc5eb3a84851b58d8f168882b3" FOREIGN KEY ("productoId") REFERENCES "producto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "producto" ADD CONSTRAINT "FK_ee5dc1a13315b980da5ffd17dc4" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" ADD CONSTRAINT "FK_5268b348d37f8ad1cbead78ef74" FOREIGN KEY ("compraId") REFERENCES "compra"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" ADD CONSTRAINT "FK_d3ef875b9e95c34b41c27829969" FOREIGN KEY ("productoId") REFERENCES "producto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "compra" ADD CONSTRAINT "FK_6a64533dbe7041ea1aa0930d294" FOREIGN KEY ("proveedorId") REFERENCES "proveedor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compra" DROP CONSTRAINT "FK_6a64533dbe7041ea1aa0930d294"`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" DROP CONSTRAINT "FK_d3ef875b9e95c34b41c27829969"`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" DROP CONSTRAINT "FK_5268b348d37f8ad1cbead78ef74"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP CONSTRAINT "FK_ee5dc1a13315b980da5ffd17dc4"`);
        await queryRunner.query(`ALTER TABLE "precio" DROP CONSTRAINT "FK_6dc5eb3a84851b58d8f168882b3"`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" DROP CONSTRAINT "FK_78594dc095d33f11673cef98da2"`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" DROP CONSTRAINT "FK_8c7cdd27dfaecb574ad82c10ac5"`);
        await queryRunner.query(`DROP TABLE "compra"`);
        await queryRunner.query(`DROP TABLE "proveedor"`);
        await queryRunner.query(`DROP TABLE "detalle_compra"`);
        await queryRunner.query(`DROP TABLE "producto"`);
        await queryRunner.query(`DROP TABLE "precio"`);
        await queryRunner.query(`DROP TABLE "detalle_venta"`);
        await queryRunner.query(`DROP TABLE "venta"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
