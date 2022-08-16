/*
  Warnings:

  - You are about to drop the column `Text` on the `Komentar` table. All the data in the column will be lost.
  - Added the required column `text` to the `Komentar` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Komentar" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "like_num" INTEGER NOT NULL,
    "dislike_num" INTEGER NOT NULL,
    "uporabnik" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    CONSTRAINT "Komentar_uporabnik_fkey" FOREIGN KEY ("uporabnik") REFERENCES "Uporabnik" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Komentar_review_fkey" FOREIGN KEY ("review") REFERENCES "Review" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Komentar" ("dislike_num", "id", "like_num", "review", "uporabnik") SELECT "dislike_num", "id", "like_num", "review", "uporabnik" FROM "Komentar";
DROP TABLE "Komentar";
ALTER TABLE "new_Komentar" RENAME TO "Komentar";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
