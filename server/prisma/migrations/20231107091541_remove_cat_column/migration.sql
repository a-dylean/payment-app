/*
  Warnings:

  - You are about to drop the column `category_name` on the `product` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `product_category_name_fkey` ON `product`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `category_name`;
