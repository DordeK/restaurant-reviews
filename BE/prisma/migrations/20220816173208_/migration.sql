-- CreateTable
CREATE TABLE "Uporabnik" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Uporabnik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "restavracija" TEXT NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Restavracija" (
    "id" TEXT NOT NULL,
    "ocena" INTEGER NOT NULL,
    "ime" TEXT NOT NULL,

    CONSTRAINT "Restavracija_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "restavracija" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestaurantImages" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "restavracija" TEXT NOT NULL,

    CONSTRAINT "RestaurantImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "like_num" INTEGER NOT NULL,
    "dislike_num" INTEGER NOT NULL,
    "uporabnik" TEXT NOT NULL,
    "restavracija" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewImages" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "review" TEXT NOT NULL,

    CONSTRAINT "ReviewImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Komentar" (
    "id" TEXT NOT NULL,
    "like_num" INTEGER NOT NULL,
    "dislike_num" INTEGER NOT NULL,
    "uporabnik" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "review" TEXT NOT NULL,

    CONSTRAINT "Komentar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Restavracija_ime_key" ON "Restavracija"("ime");

-- CreateIndex
CREATE UNIQUE INDEX "Location_restavracija_key" ON "Location"("restavracija");

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_restavracija_fkey" FOREIGN KEY ("restavracija") REFERENCES "Restavracija"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_restavracija_fkey" FOREIGN KEY ("restavracija") REFERENCES "Restavracija"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantImages" ADD CONSTRAINT "RestaurantImages_restavracija_fkey" FOREIGN KEY ("restavracija") REFERENCES "Restavracija"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_uporabnik_fkey" FOREIGN KEY ("uporabnik") REFERENCES "Uporabnik"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_restavracija_fkey" FOREIGN KEY ("restavracija") REFERENCES "Restavracija"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewImages" ADD CONSTRAINT "ReviewImages_review_fkey" FOREIGN KEY ("review") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Komentar" ADD CONSTRAINT "Komentar_uporabnik_fkey" FOREIGN KEY ("uporabnik") REFERENCES "Uporabnik"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Komentar" ADD CONSTRAINT "Komentar_review_fkey" FOREIGN KEY ("review") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
