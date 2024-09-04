import { Injectable } from '@nestjs/common';
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

    if (artist && artist !== 'null') {
      whereConditions.artist = {
        name: artist
      };
    }

    if (location && location !== 'null') {
      whereConditions.location = {
        name: location
      };
    }

    if (fromYear && fromYear !== 'null') {
      const fromDate = new Date(fromYear);
      whereConditions.year = { ...whereConditions.year, gte: fromDate };
    }

    if (toYear && toYear !== 'null') {
      const toDate = new Date(toYear);
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
