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
    artist: string,
    location: string,
    fromYear: string,
    toYear: string
  ) {

  }
}
