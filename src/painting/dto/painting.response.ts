import { ApiProperty } from '@nestjs/swagger';
import { PaintingDto } from './painting.dto';

export class PaintingsResponseDto {
  @ApiProperty({ type: [PaintingDto], description: 'Array of paintings' })
  paintings: PaintingDto[];

  @ApiProperty({ example: 5, description: 'Total number of pages' })
  totalPages: number;
}
