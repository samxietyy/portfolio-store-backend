import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {

    constructor(private prismaService: PrismaService){}

    async createOrder(userId:string, orderPrice:number){
        try{
            return await this.prismaService.order.create({
                data:{
                    totalPrice: orderPrice,
                    userId: userId
                }
            })
        }catch(error){
            throw new Error("Unable to create order.")
        }
    }


}
