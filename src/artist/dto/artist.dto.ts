import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ArtistDto {
  @ApiProperty({
    description: 'The name of the artist',
    example: 'Leonardo da Vinci'
  })
  @IsString()
  @IsNotEmpty({ message: 'Artist name is required' })
  name: string;
}
