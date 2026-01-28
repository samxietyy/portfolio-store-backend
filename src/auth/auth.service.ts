import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcrypt'
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import type { Request, Response } from 'express';

@Injectable()
export class AuthService {
    constructor(
        private prismaService: PrismaService,
        private jwtService: JwtService
    ){}


    async register(createUserDto: CreateUserDto){
        const {firstName, lastName, email, password, DOB} = createUserDto;

        // duplication check
        if(await this.prismaService.user.findUnique({where:{email: email}})){
            throw new ConflictException("User already existing.")
        }

        const passwordHash = await bcrypt.hash(password,12)

        await this.prismaService.user.create({
            data:{
                firstName,
                lastName,
                email,
                passwordHash,
                DOB
            },
            select:{
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                DOB: true,
                role: true
            }
        })

        console.log("USER CREATED:", email)
    }


    async login(loginDto: LoginDto, res: Response){
        const user = await this.prismaService.user.findUnique({where:{email: loginDto.email}})
        if(!user){
            throw new UnauthorizedException('Incorrect user or password.');
        }

        const passwordValid = await bcrypt.compare(
            loginDto.password,
            user.passwordHash,
        );

        if(!passwordValid){
            throw new UnauthorizedException('Incorrect user or password.');
        }

        const payload = {
            sub: user.id,    
            role: user.role,  // authorization purposes
        };
        const accessToken = this.jwtService.sign(payload,{
            secret: process.env.JWT_SECRET,
            expiresIn: '1d'
        });  // DEV only 1 token, exp. 1 day

        /* const refreshToken = this.jwtService.sign(payload, {
            expiresIn: '1d',    
        }); */

        res.cookie('auth_token', accessToken, {
            httpOnly: true,
            secure: true,        
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000,
            path: '/',
        });

        //DEV
        console.log("[] - Login successful. Cookie sent.")

        return {'accessToken': accessToken};
    }


    /* async refreshToken(req: Request){
        const token = req.cookies?.refreshToken;
        if(!token){
            throw new UnauthorizedException('No token provided.');     
        }

        try{
            const tokenPayload = this.jwtService.verify(token);
            if(!tokenPayload){
                throw new UnauthorizedException('Invalid token provided.');
            }

            const newAccessToken = this.jwtService.sign(
                {
                    sub: tokenPayload.sub,
                    role: tokenPayload.role
                },
                {
                    expiresIn: '15m'
                })

            return newAccessToken;
        }catch{
            throw new UnauthorizedException('Auth denied.')
        }
       
    } */



    // logout function is unnecessary, business logic in controller function


}


