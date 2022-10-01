-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "surveys" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "surveys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cloudServices" (
    "id" TEXT NOT NULL,
    "id_survey" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "cloudServices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "cloudServices_name_key" ON "cloudServices"("name");

-- AddForeignKey
ALTER TABLE "surveys" ADD CONSTRAINT "surveys_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cloudServices" ADD CONSTRAINT "cloudServices_id_survey_fkey" FOREIGN KEY ("id_survey") REFERENCES "surveys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
