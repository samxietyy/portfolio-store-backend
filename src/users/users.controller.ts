import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import type { AuthRequest } from 'src/types/auth-request';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @UseGuards(JwtAuthGuard)
    @Get('getAccount')
    async getUser(@Req() req: AuthRequest){
        return this.usersService.getUser(req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('orders')
    async getOrders(@Req() req: AuthRequest){
        return this.usersService.getOrders(req.user.userId)
    }


    @UseGuards(JwtAuthGuard)
    @Patch('updateUser')
    async updateUser(){
        return this.usersService.updateUser();
    }

    @Delete('deleteUser')
    async deleteUser(){
        return this.usersService.deleteUser();
    }



    // ADMI
    @Get()
    async adminGetUser(@Body('id') id?: string){
        return this.usersService.adminGetUser();
    }

}
