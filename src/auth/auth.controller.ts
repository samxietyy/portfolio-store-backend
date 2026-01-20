import { Body, Controller, Param, Patch, Post, Res, Req, UseGuards, Get} from '@nestjs/common';
import type { Response, Request } from 'express'
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto){
        return this.authService.register(createUserDto);
    }


    @Post('login')
    async login(
        @Body() loginDto: LoginDto, 
        @Res({ passthrough: true }) res: Response,
    ){
        return this.authService.login(loginDto, res)
    }

    @Post('logout')
    async logout(@Res({ passthrough: true }) res: Response){
        res.clearCookie('auth_token')
        return {message: "Logout successful."}
    }


    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    async me(@Req() req: Request){
        console.log("[] - Running login check.")
        return {
            loggedIn: true,
            user: req.body
        }
    }

}
