/*
  Warnings:

  - You are about to alter the column `lat` on the `Location` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.
  - You are about to alter the column `lng` on the `Location` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Location" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lat" REAL NOT NULL,
    "lng" REAL NOT NULL
);
INSERT INTO "new_Location" ("id", "lat", "lng") SELECT "id", "lat", "lng" FROM "Location";
DROP TABLE "Location";
ALTER TABLE "new_Location" RENAME TO "Location";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
