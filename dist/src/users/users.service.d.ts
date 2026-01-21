import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getUser(userId: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        DOB: Date | null;
    }>;
    getOrders(userId: string): Promise<void>;
    updateUser(): void;
    deleteUser(): void;
    adminGetUser(): void;
}
