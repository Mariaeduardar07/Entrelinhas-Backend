/*
  Warnings:

  - You are about to drop the column `name` on the `books` table. All the data in the column will be lost.
  - Added the required column `title` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "historical_period" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "books_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_books" ("authorId", "historical_period", "id", "imageUrl", "summary") SELECT "authorId", "historical_period", "id", "imageUrl", "summary" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
CREATE UNIQUE INDEX "books_title_key" ON "books"("title");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
