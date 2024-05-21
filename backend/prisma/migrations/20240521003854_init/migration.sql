-- CreateTable
CREATE TABLE "Cedente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "document" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Recebivel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "emissionDate" DATETIME NOT NULL,
    "assignorID" TEXT NOT NULL,
    CONSTRAINT "Recebivel_assignorID_fkey" FOREIGN KEY ("assignorID") REFERENCES "Cedente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
