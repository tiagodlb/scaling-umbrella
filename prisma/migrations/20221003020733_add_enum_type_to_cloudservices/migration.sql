/*
  Warnings:

  - Changed the type of `name` on the `cloudServices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CloudServiceType" AS ENUM ('AWS', 'GoogleCloud', 'Azure');

-- AlterTable
ALTER TABLE "cloudServices" DROP COLUMN "name",
ADD COLUMN     "name" "CloudServiceType" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cloudServices_name_key" ON "cloudServices"("name");
