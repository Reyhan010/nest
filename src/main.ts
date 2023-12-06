// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Membuat konfigurasi dokumen Swagger
  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('Deskripsi API Median')
    .setVersion('0.1')
    .build();

  // Membuat dokumen Swagger dengan menggunakan konfigurasi
  const document = SwaggerModule.createDocument(app, config);

  // Menyiapkan Swagger UI untuk melayani dokumentasi
  SwaggerModule.setup('api', app, document);

  // Memulai aplikasi NestJS Anda
  await app.listen(3000);
}

bootstrap();