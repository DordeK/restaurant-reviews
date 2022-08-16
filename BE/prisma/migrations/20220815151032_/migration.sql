/*
  Warnings:

  - The primary key for the `Komentar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `komentar_id` on the `Komentar` table. All the data in the column will be lost.
  - The required column `id` was added to the `Komentar` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Komentar" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "like_num" INTEGER NOT NULL,
    "dislike_num" INTEGER NOT NULL,
    "uporabnik" TEXT NOT NULL,
    "Text" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    CONSTRAINT "Komentar_uporabnik_fkey" FOREIGN KEY ("uporabnik") REFERENCES "Uporabnik" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Komentar_review_fkey" FOREIGN KEY ("review") REFERENCES "Review" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Komentar" ("Text", "dislike_num", "like_num", "review", "uporabnik") SELECT "Text", "dislike_num", "like_num", "review", "uporabnik" FROM "Komentar";
DROP TABLE "Komentar";
ALTER TABLE "new_Komentar" RENAME TO "Komentar";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
