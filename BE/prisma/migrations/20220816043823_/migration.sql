-- CreateTable
CREATE TABLE "ReviewImages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    CONSTRAINT "ReviewImages_review_fkey" FOREIGN KEY ("review") REFERENCES "Review" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
