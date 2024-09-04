import { Controller, Get, HttpCode } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Artist')
@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @HttpCode(200)
  @Get('get')
  @ApiOperation({ summary: 'Get all artists' })
  @ApiResponse({ status: 200, description: 'Returns a list of all artists.' })
  async getAll() {
    return this.artistService.getAll();
  }
}
