-- CreateTable
CREATE TABLE "RestaurantImages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "restavracija" TEXT NOT NULL,
    CONSTRAINT "RestaurantImages_restavracija_fkey" FOREIGN KEY ("restavracija") REFERENCES "Restavracija" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
