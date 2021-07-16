import { CreateBoardDto } from './dto/createboard.dto';
import { UpdateBoardDto } from './dto/updateboard.dto';
import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';
export declare class BoardsService {
    private boardRepository;
    constructor(boardRepository: Repository<Board>);
    create(CreateBoardDto: CreateBoardDto): Promise<CreateBoardDto>;
    findAll(): Promise<Board[]>;
    findOne(id: string): Promise<Board>;
    update(id: string, updateBoardDto: UpdateBoardDto): Promise<UpdateBoardDto>;
    remove(id: string): Promise<void>;
}
