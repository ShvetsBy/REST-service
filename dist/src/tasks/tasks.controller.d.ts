import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(boardId: string, createTaskDto: CreateTaskDto, res: any): Promise<void>;
    findAll(boardId: string, res: any): Promise<void>;
    findOne(boardId: string, id: string, res: any): Promise<void>;
    update(id: string, updateTaskDto: UpdateTaskDto, res: any): Promise<void>;
    remove(id: string, res: any): Promise<void>;
}
