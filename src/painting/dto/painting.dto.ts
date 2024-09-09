import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsBase64, IsOptional } from 'class-validator';

export class PaintingDto {
  @ApiPropertyOptional({
    example: '1234567890abcdef',
    description: 'The ID of the painting'
  })
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty({
    description: 'Title of the painting',
    example: 'Starry Night'
  })
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @ApiProperty({
    description: 'Name of the artist',
    example: 'Van Gogh'
  })
  @IsNotEmpty({ message: 'Artist is required' })
  @IsString()
  artist: string;

  @ApiProperty({
    description: 'Location where the painting is displayed',
    example: 'The Louvre'
  })
  @IsNotEmpty({ message: 'Location is required' })
  @IsString()
  location: string;

  @ApiPropertyOptional({
    description: 'The year the painting was created',
    example: '1889'
  })
  @IsString()
  @IsNotEmpty({ message: 'Year is required' })
  year: string;

  @ApiProperty({
    description: 'Base64 encoded image of the painting',
    example: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...'
  })
  @IsString()
  @IsNotEmpty({ message: 'Image is required' })
  @IsBase64()
  image: string;
}
