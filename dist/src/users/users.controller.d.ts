import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { TasksService } from '../tasks/tasks.service';
export declare class UsersController {
    private readonly userService;
    private readonly tasksService;
    constructor(userService: UserService, tasksService: TasksService);
    create(createUserDto: CreateUserDto, res: any): Promise<void>;
    findAll(res: any): Promise<void>;
    findOne(id: string, res: any): Promise<any>;
    update(id: string, updateUserDto: UpdateUserDto, res: any): Promise<any>;
    remove(id: string, res: any): Promise<void>;
}
