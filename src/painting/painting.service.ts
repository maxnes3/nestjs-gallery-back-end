import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PaintingService {
  constructor(private prismaService: PrismaService) {}

  getAll() {
    return this.prismaService.painting.findMany({
      include: {
        artist: true,
        location: true
      }
    });
  }

  searchByParams(
    artist: string | null,
    location: string | null,
    fromYear: string | null,
    toYear: string | null
  ) {
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

    return this.prismaService.painting.findMany({
      where: whereConditions,
      include: {
        artist: true,
        location: true
      }
    });
  }
}
