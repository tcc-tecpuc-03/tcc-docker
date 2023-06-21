-- CreateTable
CREATE TABLE "auth_user" (
    "id" BIGSERIAL NOT NULL,
    "nome" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,

    CONSTRAINT "auth_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buysket_basket" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "buysket_basket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buysket_basket_items" (
    "basket_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "buysket_basket_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buysket_items" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "price" DECIMAL NOT NULL,
    "image_url" VARCHAR,
    "category" VARCHAR,
    "rfid" TEXT NOT NULL,

    CONSTRAINT "buysket_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "buysket_items_rfid_key" ON "buysket_items"("rfid");

-- AddForeignKey
ALTER TABLE "buysket_basket_items" ADD CONSTRAINT "fk_basket_id" FOREIGN KEY ("basket_id") REFERENCES "buysket_basket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "buysket_basket_items" ADD CONSTRAINT "fk_item_id" FOREIGN KEY ("item_id") REFERENCES "buysket_items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
