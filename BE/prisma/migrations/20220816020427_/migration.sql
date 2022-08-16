/*
  Warnings:

  - You are about to drop the column `url` on the `RestaurantImages` table. All the data in the column will be lost.
  - Added the required column `image` to the `RestaurantImages` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RestaurantImages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" BLOB NOT NULL,
    "restavracija" TEXT NOT NULL,
    CONSTRAINT "RestaurantImages_restavracija_fkey" FOREIGN KEY ("restavracija") REFERENCES "Restavracija" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RestaurantImages" ("id", "restavracija") SELECT "id", "restavracija" FROM "RestaurantImages";
DROP TABLE "RestaurantImages";
ALTER TABLE "new_RestaurantImages" RENAME TO "RestaurantImages";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
