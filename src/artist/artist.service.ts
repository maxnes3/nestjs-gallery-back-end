import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ArtistService {
  constructor(private prismaService: PrismaService) {}

  getAll() {
    return this.prismaService.artist.findMany();
  }
}
