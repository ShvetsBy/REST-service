import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(boardId: string, createTaskDto: CreateTaskDto): Promise<CreateTaskDto>;
    findAll(boardId: string): Promise<import("./entities/task.entity").Task[]>;
    findOne(boardId: string, id: string): Promise<import("./entities/task.entity").Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<UpdateTaskDto>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
