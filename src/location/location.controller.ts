import { Controller, Get, HttpCode } from '@nestjs/common';
import { LocationService } from './location.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Location')
@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @HttpCode(200)
  @Get('get')
  @ApiOperation({ summary: 'Get all locations' })
  @ApiResponse({ status: 200, description: 'Returns a list of all locations.' })
  async getAll() {
    return this.locationService.getAll();
  }
}
