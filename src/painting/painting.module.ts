import { Module } from '@nestjs/common';
import { PaintingService } from './painting.service';
import { PaintingController } from './painting.controller';

@Module({
  controllers: [PaintingController],
  providers: [PaintingService]
})
export class PaintingModule {}
