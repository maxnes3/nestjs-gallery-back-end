import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PaintingDto } from './dto/painting.dto';
import { PaintingsResponseDto } from './dto/painting.response';

@Injectable()
export class PaintingService {
  constructor(private prismaService: PrismaService) {}

  private mapToPaintingDto(painting): PaintingDto {
    return {
      id: painting.id,
      title: painting.title,
      artist: painting.artist.name,
      location: painting.location.name,
      year: painting.year.getFullYear().toString(),
      image: painting.image
    };
  }

  async getAll(page: number): Promise<PaintingsResponseDto> {
    if (page < 1) {
      throw new BadRequestException('Page number must be greater than 0');
    }
    const take: number = 6;

    const skip = (page - 1) * take;

    const [paintings, totalCount] = await Promise.all([
      this.prismaService.painting.findMany({
        skip,
        take,
        include: {
          artist: true,
          location: true
        }
      }),
      this.prismaService.painting.count()
    ]);
    const totalPages = Math.ceil(totalCount / take);

    return {
      paintings: paintings.map(this.mapToPaintingDto),
      totalPages
    };
  }

  async searchByParams(
    artist: string | null,
    location: string | null,
    fromYear: string | null,
    toYear: string | null
  ): Promise<PaintingDto[]> {
    const whereConditions: any = {};

    if (artist && artist !== 'null' && artist.trim().length > 0) {
      whereConditions.artist = {
        name: artist
      };
    }

    if (location && location !== 'null' && location.trim().length > 0) {
      whereConditions.location = {
        name: location
      };
    }

    if (fromYear && fromYear !== 'null' && fromYear.trim().length > 0) {
      const fromDate = new Date(fromYear);

      if (!fromDate) {
        throw new BadRequestException('Not correct From date');
      }

      whereConditions.year = { ...whereConditions.year, gte: fromDate };
    }

    if (toYear && toYear !== 'null' && toYear.trim().length > 0) {
      const toDate = new Date(toYear);

      if (!toDate) {
        throw new BadRequestException('Not correct To date');
      }

      whereConditions.year = { ...whereConditions.year, lte: toDate };
    }

    const paintings = await this.prismaService.painting.findMany({
      where: whereConditions,
      include: {
        artist: true,
        location: true
      }
    });

    return paintings.map(this.mapToPaintingDto);
  }
}
