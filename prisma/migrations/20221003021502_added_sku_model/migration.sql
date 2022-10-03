-- CreateTable
CREATE TABLE "Sku" (
    "id" TEXT NOT NULL,
    "id_survey" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "currencyCode" TEXT NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "Sku_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sku_sku_key" ON "Sku"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "Sku_displayName_key" ON "Sku"("displayName");

-- AddForeignKey
ALTER TABLE "Sku" ADD CONSTRAINT "Sku_id_survey_fkey" FOREIGN KEY ("id_survey") REFERENCES "surveys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
