/*
  Warnings:

  - Added the required column `image` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Menu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" BLOB NOT NULL,
    "restavracija" TEXT NOT NULL,
    CONSTRAINT "Menu_restavracija_fkey" FOREIGN KEY ("restavracija") REFERENCES "Restavracija" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Menu" ("id", "restavracija") SELECT "id", "restavracija" FROM "Menu";
DROP TABLE "Menu";
ALTER TABLE "new_Menu" RENAME TO "Menu";
CREATE UNIQUE INDEX "Menu_restavracija_key" ON "Menu"("restavracija");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
