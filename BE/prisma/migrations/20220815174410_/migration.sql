/*
  Warnings:

  - You are about to drop the column `passwod` on the `Uporabnik` table. All the data in the column will be lost.
  - Added the required column `password` to the `Uporabnik` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Uporabnik" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Uporabnik" ("email", "id", "phone_number", "username") SELECT "email", "id", "phone_number", "username" FROM "Uporabnik";
DROP TABLE "Uporabnik";
ALTER TABLE "new_Uporabnik" RENAME TO "Uporabnik";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
