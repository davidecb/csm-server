import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as cors from 'cors';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppLogger } from './infrastructure/config/ceiba-logger.service';
import { EnvVariables } from './infrastructure/config/environment/env-variables.enum';
import { BusinessExceptionsFilter } from './infrastructure/exceptions/business-exceptions-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = await app.resolve(AppLogger);
  const configService = app.get(ConfigService);
  app.use(helmet());
  app.use(cors());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new BusinessExceptionsFilter(logger));

  const swaggerOptions = new DocumentBuilder()
    .setTitle('CSM server')
    .setDescription('CSM server with nestJS and MongoDB. modular architecture')
    .setVersion('1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('/api/doc', app, swaggerDocument);

  app.setGlobalPrefix(configService.get(EnvVariables.APPLICATION_CONTEXT_PATH));
  await app.listen(configService.get(EnvVariables.APPLICATION_PORT));
}
bootstrap();
