/*
  Warnings:

  - You are about to drop the column `imageId` on the `Images` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Images" DROP COLUMN "imageId",
ADD COLUMN     "imageque" INTEGER;
