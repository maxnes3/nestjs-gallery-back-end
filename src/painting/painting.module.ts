import { Module } from '@nestjs/common';
import { PaintingService } from './painting.service';
import { PaintingController } from './painting.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [PaintingController],
  providers: [PaintingService, PrismaService]
})
export class PaintingModule {}
