import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<{
        productName: string;
        color: string;
        price: import("@prisma/client/runtime/library").Decimal;
        image: string;
        description: string | null;
        isActive: boolean;
        id: string;
        createdAt: Date;
        isOos: boolean;
    }[]>;
    findOne(id: string): Promise<{
        productName: string;
        color: string;
        price: import("@prisma/client/runtime/library").Decimal;
        image: string;
        description: string | null;
        isActive: boolean;
        id: string;
        createdAt: Date;
        isOos: boolean;
    } | undefined>;
    findSizes(id: string): Promise<{
        size: import("../generated/prisma/enums").Size;
        inStock: boolean;
    }[]>;
    createProduct(createProductDto: CreateProductDto): Promise<void>;
}
