import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/createboard.dto';
import { UpdateBoardDto } from './dto/updateboard.dto';
import { TasksService } from '../tasks/tasks.service';
export declare class BoardsController {
    private readonly boardService;
    private readonly tasksService;
    constructor(boardService: BoardsService, tasksService: TasksService);
    create(createBoardDto: CreateBoardDto, res: any): Promise<void>;
    findAll(res: any): Promise<void>;
    findOne(id: string, res: any): Promise<any>;
    update(id: string, updateBoardDto: UpdateBoardDto, res: any): Promise<void>;
    remove(id: string, res: any): Promise<void>;
}
