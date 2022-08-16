-- CreateTable
CREATE TABLE "Uporabnik" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "usernama" TEXT NOT NULL,
    "passwod" TEXT NOT NULL,
    "tel_number" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "section" INTEGER NOT NULL,
    "ocena" INTEGER NOT NULL,
    "cena" INTEGER NOT NULL,
    "ime_izdelka" INTEGER NOT NULL,
    "restavracija" TEXT NOT NULL,
    CONSTRAINT "Menu_restavracija_fkey" FOREIGN KEY ("restavracija") REFERENCES "Restavracija" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Restavracija" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ocena" INTEGER NOT NULL,
    "ime" TEXT NOT NULL,
    "lokacija" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "like_num" INTEGER NOT NULL,
    "dislike_num" INTEGER NOT NULL,
    "uporabnik" TEXT NOT NULL,
    "restavracija" TEXT NOT NULL,
    "Text" TEXT NOT NULL,
    CONSTRAINT "Review_uporabnik_fkey" FOREIGN KEY ("uporabnik") REFERENCES "Uporabnik" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Review_restavracija_fkey" FOREIGN KEY ("restavracija") REFERENCES "Restavracija" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Komentar" (
    "komentar_id" TEXT NOT NULL PRIMARY KEY,
    "like_num" INTEGER NOT NULL,
    "dislike_num" INTEGER NOT NULL,
    "uporabnik" TEXT NOT NULL,
    "Text" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    CONSTRAINT "Komentar_uporabnik_fkey" FOREIGN KEY ("uporabnik") REFERENCES "Uporabnik" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Komentar_review_fkey" FOREIGN KEY ("review") REFERENCES "Review" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Menu_restavracija_key" ON "Menu"("restavracija");
