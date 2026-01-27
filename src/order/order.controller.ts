
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OrderService } from './order.service';
import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { AuthRequest } from 'src/types/auth-request';
import { OrderItemDto } from './dto/orderItems.dto';

@Controller('order')
export class OrderController {

    constructor(private readonly orderService: OrderService){}

    @UseGuards(AuthGuard('jwt'))
    @Post('createOrder')
    async createOrder(@Req() req: AuthRequest, @Body('orderPrice') orderPrice: number){
        const orderCreated = await this.orderService.createOrder(req.user.userId, orderPrice);
        return {
           orderId: orderCreated.id
        }
    }





}
