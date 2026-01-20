import { IsDate, IsEmail, IsString } from "class-validator";

export class RegisterDto{
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    DOB: string;

}