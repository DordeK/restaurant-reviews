/*
  Warnings:

  - You are about to drop the column `location` on the `Restavracija` table. All the data in the column will be lost.
  - Added the required column `restavracija` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Location" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lat" REAL NOT NULL,
    "lng" REAL NOT NULL,
    "restavracija" TEXT NOT NULL,
    CONSTRAINT "Location_restavracija_fkey" FOREIGN KEY ("restavracija") REFERENCES "Restavracija" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Location" ("id", "lat", "lng") SELECT "id", "lat", "lng" FROM "Location";
DROP TABLE "Location";
ALTER TABLE "new_Location" RENAME TO "Location";
CREATE UNIQUE INDEX "Location_restavracija_key" ON "Location"("restavracija");
CREATE TABLE "new_Restavracija" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ocena" INTEGER NOT NULL,
    "ime" TEXT NOT NULL
);
INSERT INTO "new_Restavracija" ("id", "ime", "ocena") SELECT "id", "ime", "ocena" FROM "Restavracija";
DROP TABLE "Restavracija";
ALTER TABLE "new_Restavracija" RENAME TO "Restavracija";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
