import { UsersService } from './users.service';
import type { AuthRequest } from 'src/types/auth-request';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUser(req: AuthRequest): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        DOB: Date | null;
    }>;
    getOrders(req: AuthRequest): Promise<void>;
    updateUser(): Promise<void>;
    deleteUser(): Promise<void>;
    adminGetUser(id?: string): Promise<void>;
}
