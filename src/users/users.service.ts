import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

    constructor(private prismaService: PrismaService){}

    async getUser(userId: string){
        const userFound = await this.prismaService.user.findUnique({
            where:{ id: userId }
        })

        if(!userFound){
            throw new NotFoundException("User not found.")
        }

        const safeUserData = {
            id: userFound.id,
            firstName: userFound.firstName,
            lastName: userFound.lastName,
            email: userFound.email,
            DOB: userFound.DOB
        }
        return safeUserData
    }


    async getOrders(userId: string){
        const ordersFound = await this.prismaService.order.findMany({
            where:{
                userId: userId,
            },
            include:{
                orderItems: {
                    include:{
                        variant: true
                    }
                }
            }
        })
    }

    updateUser(){

    }

    deleteUser(){

    }



    //ADMIN
    adminGetUser(){
        
    }

}



