/*
  Warnings:

  - A unique constraint covering the columns `[ime]` on the table `Restavracija` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RestaurantImages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "restavracija" TEXT NOT NULL,
    CONSTRAINT "RestaurantImages_restavracija_fkey" FOREIGN KEY ("restavracija") REFERENCES "Restavracija" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RestaurantImages" ("id", "image", "restavracija") SELECT "id", "image", "restavracija" FROM "RestaurantImages";
DROP TABLE "RestaurantImages";
ALTER TABLE "new_RestaurantImages" RENAME TO "RestaurantImages";
CREATE TABLE "new_Menu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "restavracija" TEXT NOT NULL,
    CONSTRAINT "Menu_restavracija_fkey" FOREIGN KEY ("restavracija") REFERENCES "Restavracija" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Menu" ("id", "image", "restavracija") SELECT "id", "image", "restavracija" FROM "Menu";
DROP TABLE "Menu";
ALTER TABLE "new_Menu" RENAME TO "Menu";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Restavracija_ime_key" ON "Restavracija"("ime");
