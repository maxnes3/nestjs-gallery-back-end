import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsBase64
} from 'class-validator';
import { ArtistDto } from '../../artist/dto/artist.dto';
import { LocationDto } from '../../location/dto/location.dto';

export class PaintingDto {
  @ApiProperty({
    example: '1234567890abcdef',
    description: 'The ID of the painting'
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Title of the painting',
    example: 'Starry Night'
  })
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @ApiProperty({
    description: 'Details about the artist',
    type: ArtistDto
  })
  @ValidateNested()
  @Type(() => ArtistDto)
  artist: ArtistDto;

  @ApiProperty({
    description: 'Location where the painting is displayed',
    type: LocationDto
  })
  @ValidateNested()
  @Type(() => LocationDto)
  location: LocationDto;

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
