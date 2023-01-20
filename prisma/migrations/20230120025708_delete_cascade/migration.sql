-- DropForeignKey
ALTER TABLE `Bank` DROP FOREIGN KEY `Bank_personId_fkey`;

-- AddForeignKey
ALTER TABLE `Bank` ADD CONSTRAINT `Bank_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `Person`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
