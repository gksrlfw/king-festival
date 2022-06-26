import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppEnvironment } from '@src/core/config/app-environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // log level
  app.useLogger(
    AppEnvironment.isProd() === true
      ? ['log', 'warn', 'error']
      : ['log', 'warn', 'error', 'debug', 'verbose'],
  );

  app.setGlobalPrefix('/api');

  const config = new DocumentBuilder()
    .setTitle('Festival')
    .setDescription('Festival API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
