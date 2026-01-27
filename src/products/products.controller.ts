import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get()
    async findAll(){
        return this.productsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        const product = await this.productsService.findOne(id)
        if(product?.isActive){
           return product 
        }
    }
    
    @Get('sizes/:id')
    async findSizes(@Param('id') id: string){
        return await this.productsService.getSizes(id);
    }




    @Post()
    async createProduct(@Body() createProductDto: CreateProductDto){
        this.productsService.createProduct(createProductDto)
    }
}


