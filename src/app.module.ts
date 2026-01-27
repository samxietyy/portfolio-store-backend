import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { R2Service } from './r2/r2.service';
import { ConfigModule } from '@nestjs/config';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';

@Module({
  imports: [ProductsModule, UsersModule, PrismaModule, AuthModule, ConfigModule.forRoot({
    isGlobal: true
  })
  ],
  controllers: [AppController, OrderController],
  providers: [AppService, PrismaService, R2Service, OrderService],
})
export class AppModule {}
