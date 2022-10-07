/*
  Warnings:

  - You are about to drop the `Sku` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Sku" DROP CONSTRAINT "Sku_id_survey_fkey";

-- DropTable
DROP TABLE "Sku";

-- CreateTable
CREATE TABLE "sku" (
    "id" TEXT NOT NULL,
    "id_survey" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "currencyCode" TEXT NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "sku_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sku_sku_key" ON "sku"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "sku_displayName_key" ON "sku"("displayName");

-- AddForeignKey
ALTER TABLE "sku" ADD CONSTRAINT "sku_id_survey_fkey" FOREIGN KEY ("id_survey") REFERENCES "surveys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
