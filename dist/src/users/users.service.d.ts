import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(CreateUserDto: CreateUserDto): Promise<CreateUserDto>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    findbyLogin(login: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<UpdateUserDto>;
    remove(id: string): Promise<void>;
}
