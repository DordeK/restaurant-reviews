/*
  Warnings:

  - You are about to drop the column `cena` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `ime_izdelka` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `ocena` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `section` on the `Menu` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Menu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "restavracija" TEXT NOT NULL,
    CONSTRAINT "Menu_restavracija_fkey" FOREIGN KEY ("restavracija") REFERENCES "Restavracija" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Menu" ("id", "restavracija") SELECT "id", "restavracija" FROM "Menu";
DROP TABLE "Menu";
ALTER TABLE "new_Menu" RENAME TO "Menu";
CREATE UNIQUE INDEX "Menu_restavracija_key" ON "Menu"("restavracija");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
