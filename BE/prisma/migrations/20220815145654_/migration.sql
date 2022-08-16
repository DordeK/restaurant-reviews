/*
  Warnings:

  - You are about to drop the column `usernama` on the `Uporabnik` table. All the data in the column will be lost.
  - Added the required column `username` to the `Uporabnik` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Uporabnik" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "passwod" TEXT NOT NULL,
    "tel_number" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Uporabnik" ("email", "id", "passwod", "tel_number") SELECT "email", "id", "passwod", "tel_number" FROM "Uporabnik";
DROP TABLE "Uporabnik";
ALTER TABLE "new_Uporabnik" RENAME TO "Uporabnik";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
