import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { PaintingService } from './painting.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Painting')
@Controller('painting')
export class PaintingController {
  constructor(private readonly paintingService: PaintingService) {}

  @HttpCode(200)
  @Get('get')
  @ApiOperation({ summary: 'Get all paintings' })
  @ApiResponse({ status: 200, description: 'Returns a list of all paintings.' })
  async getAll() {
    return this.paintingService.getAll();
  }

  @HttpCode(200)
  @Get('search')
  @ApiOperation({ summary: 'Search paintings by parameters' })
  @ApiParam({
    name: 'artist',
    required: false,
    description: 'Artist name to filter paintings by.'
  })
  @ApiParam({
    name: 'location',
    required: false,
    description: 'Location name to filter paintings by.'
  })
  @ApiParam({
    name: 'fromYear',
    required: false,
    description: 'Start year to filter paintings by.'
  })
  @ApiParam({
    name: 'toYear',
    required: false,
    description: 'End year to filter paintings by.'
  })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of paintings that match the search parameters.'
  })
  async searchByParams(
    @Param('artist') artist: string,
    @Param('location') location: string,
    @Param('fromYear') fromYear: string,
    @Param('toYear') toYear: string
  ) {
    return this.paintingService.searchByParams(
      artist,
      location,
      fromYear,
      toYear
    );
  }
}
