import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaintingModule } from './painting/painting.module';
import { ArtistModule } from './artist/artist.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PaintingModule,
    ArtistModule,
    LocationModule
  ]
})
export class AppModule {}
