/*
  Warnings:

  - You are about to drop the column `lokacija` on the `Restavracija` table. All the data in the column will be lost.
  - Added the required column `location` to the `Restavracija` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lat" TEXT NOT NULL,
    "lng" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Restavracija" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ocena" INTEGER NOT NULL,
    "ime" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    CONSTRAINT "Restavracija_location_fkey" FOREIGN KEY ("location") REFERENCES "Location" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Restavracija" ("id", "ime", "ocena") SELECT "id", "ime", "ocena" FROM "Restavracija";
DROP TABLE "Restavracija";
ALTER TABLE "new_Restavracija" RENAME TO "Restavracija";
CREATE UNIQUE INDEX "Restavracija_location_key" ON "Restavracija"("location");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
