/*
  Warnings:

  - You are about to drop the column `available` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `picture` on the `product` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - Added the required column `inventory` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `product_name_key` ON `product`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `available`,
    DROP COLUMN `description`,
    DROP COLUMN `picture`,
    ADD COLUMN `inventory` INTEGER NOT NULL,
    MODIFY `name` VARCHAR(255) NOT NULL;
