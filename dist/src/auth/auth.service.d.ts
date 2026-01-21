import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import type { Response } from 'express';
export declare class AuthService {
    private prismaService;
    private jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    register(createUserDto: CreateUserDto): Promise<void>;
    login(loginDto: LoginDto, res: Response): Promise<{
        accessToken: string;
    }>;
}
