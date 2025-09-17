-- CreateTable
CREATE TABLE "authors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "biography" TEXT NOT NULL,
    "historical_period" TEXT,
    "curiosities" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "books" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "year_publication" INTEGER NOT NULL,
    "summary" TEXT NOT NULL,
    "historical_period" TEXT NOT NULL,
    "curiosities" TEXT NOT NULL,
    "characters" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "books_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "books_title_key" ON "books"("title");
