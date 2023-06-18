/*
  Warnings:

  - You are about to drop the `token` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "token" DROP CONSTRAINT "token_userId_fkey";

-- DropTable
DROP TABLE "token";

-- DropEnum
DROP TYPE "TokenType";
