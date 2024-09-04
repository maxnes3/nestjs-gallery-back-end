import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LocationDto {
  @ApiProperty({
    description: 'The name of the location',
    example: 'The Louvre Museum'
  })
  @IsString()
  @IsNotEmpty({ message: 'Location name is required' })
  name: string;
}
