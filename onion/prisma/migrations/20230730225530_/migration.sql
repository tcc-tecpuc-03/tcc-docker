/*
  Warnings:

  - You are about to drop the `auth_user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `buysket_basket` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `buysket_basket_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `buysket_items` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "buysket_basket_items" DROP CONSTRAINT "fk_basket_id";

-- DropForeignKey
ALTER TABLE "buysket_basket_items" DROP CONSTRAINT "fk_item_id";

-- DropTable
DROP TABLE "auth_user";

-- DropTable
DROP TABLE "buysket_basket";

-- DropTable
DROP TABLE "buysket_basket_items";

-- DropTable
DROP TABLE "buysket_items";

-- CreateTable
CREATE TABLE "basket" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "basket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "basket_items" (
    "id_item" INTEGER,
    "id_basket" INTEGER,
    "id" SERIAL NOT NULL,

    CONSTRAINT "basket_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "rfid" VARCHAR NOT NULL,
    "nome" VARCHAR,
    "categoria" INTEGER NOT NULL,
    "imagem" VARCHAR,
    "preco" DECIMAL NOT NULL DEFAULT 0,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "basket_items" ADD CONSTRAINT "fk_basket" FOREIGN KEY ("id_basket") REFERENCES "basket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "basket_items" ADD CONSTRAINT "fk_items" FOREIGN KEY ("id_item") REFERENCES "items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
