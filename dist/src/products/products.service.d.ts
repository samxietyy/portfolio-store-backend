import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Size } from 'src/generated/prisma/enums';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
    findOne(productId: string): Promise<{
        productName: string;
        color: string;
        price: import("@prisma/client/runtime/library").Decimal;
        image: string;
        description: string | null;
        isActive: boolean;
        id: string;
        createdAt: Date;
        isOos: boolean;
    } | null>;
    getSizes(id: string): Promise<{
        size: Size;
        inStock: boolean;
    }[]>;
    createProduct(createProductDto: CreateProductDto): void;
}
