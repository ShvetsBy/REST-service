import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/createboard.dto';
import { UpdateBoardDto } from './dto/updateboard.dto';
export declare class BoardsController {
    private readonly boardService;
    constructor(boardService: BoardsService);
    create(createBoardDto: CreateBoardDto): Promise<CreateBoardDto>;
    findAll(): Promise<import("./entities/board.entity").Board[]>;
    findOne(id: string): Promise<import("./entities/board.entity").Board>;
    update(id: string, updateBoardDto: UpdateBoardDto): Promise<UpdateBoardDto>;
    remove(id: string): Promise<void>;
}
