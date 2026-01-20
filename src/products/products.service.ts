import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Size } from 'src/generated/prisma/enums';

@Injectable()
export class ProductsService {

    constructor(private prisma: PrismaService) {}

    // Find active products
    findAll(){
        return this.prisma.product.findMany({
            where: {
                isActive: true,
            },
        });

    } 

    // Find one product using id
    async findOne(productId: string){    
        return await this.prisma.product.findFirst({
            where:{
                id: productId
            }
        });
        
    }

    async getSizes(id: string){
        const sizes = await this.prisma.productVariant.findMany({
            select: {
                size: true,
                stock: true
            },
            where:{
                productId: id
            }
        })

        return sizes.map(s => ({
            size: s.size,
            inStock: s.stock > 0
        }))
    }





    //ADMIN

    //TODO
    createProduct(createProductDto: CreateProductDto){

    }



}