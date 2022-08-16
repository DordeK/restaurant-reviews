/*
  Warnings:

  - You are about to drop the column `Text` on the `Review` table. All the data in the column will be lost.
  - Added the required column `text` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "like_num" INTEGER NOT NULL,
    "dislike_num" INTEGER NOT NULL,
    "uporabnik" TEXT NOT NULL,
    "restavracija" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    CONSTRAINT "Review_uporabnik_fkey" FOREIGN KEY ("uporabnik") REFERENCES "Uporabnik" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Review_restavracija_fkey" FOREIGN KEY ("restavracija") REFERENCES "Restavracija" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("dislike_num", "id", "like_num", "restavracija", "uporabnik") SELECT "dislike_num", "id", "like_num", "restavracija", "uporabnik" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
