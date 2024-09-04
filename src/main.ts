import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: [process.env.URL_FRONTEND]
  });

  const config = new DocumentBuilder()
    .setTitle('FWT-Gallery-Back-End')
    .setDescription(
      'The project used: Nest.js, PostgreSQL, REST API, Validation pipe, Swagger.'
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.URL_PORT);
}
bootstrap();
