import { IsNumber, IsString } from "class-validator";

export class OrderItemDto{

    @IsString()
    sku: string;

    @IsNumber()
    quantity: number;


}