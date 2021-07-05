import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    create(boardId: string, createTaskDto: CreateTaskDto): Promise<CreateTaskDto>;
    findAll(boardId: string): Promise<Task[]>;
    findOne(boardId: string, id: string): Promise<Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<UpdateTaskDto>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
