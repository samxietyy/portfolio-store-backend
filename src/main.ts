import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,              // rimuove campi non presenti nel DTO
    forbidNonWhitelisted: true,   // blocca campi extra
    transform: true,              // converte tipi primitivi
    exceptionFactory: (errors) => {
      return new BadRequestException(errors);
    }
  }));

  app.use(cookieParser())
  app.enableCors({
    origin: [
      "http://localhost:3001",
      "https://chain.portfolio.samuelezucchini.com"
    ],
    credentials: true

  })

  await app.listen(process.env.PORT ?? 3000);
}


bootstrap();


