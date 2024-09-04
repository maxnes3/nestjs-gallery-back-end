import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class LocationService {
  constructor(private prismaService: PrismaService) {}

  getAll() {
    return this.prismaService.location.findMany();
  }
}
