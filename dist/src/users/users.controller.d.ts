import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { TasksService } from '../tasks/tasks.service';
export declare class UsersController {
    private readonly userService;
    private readonly tasksService;
    constructor(userService: UserService, tasksService: TasksService);
    create(createUserDto: CreateUserDto): Promise<Partial<CreateUserDto>>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<UpdateUserDto>;
    remove(id: string): Promise<void>;
}
