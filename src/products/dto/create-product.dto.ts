import { IsBoolean, IsNumber, isString, IsString, IsUrl } from "class-validator";

export class CreateProductDto {
    @IsString()
    productName: string;

    @IsString()
    color: string;

    @IsNumber()
    price: number;

    @IsString()
    image: string;
    //TODO: create a method that uploads the image to the hosting server, then returns its URL here

    @IsString()
    description: string;

    @IsBoolean()
    isActive: Boolean;

     
}
