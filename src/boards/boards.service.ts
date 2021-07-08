import { Inject, Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/createboard.dto';
import { UpdateBoardDto } from './dto/updateboard.dto';
import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @Inject('BOARD_REPOSITORY')
    private boardRepository: Repository<Board>
  ) {}

  async create(CreateBoardDto: CreateBoardDto): Promise<CreateBoardDto> {
    const newBoard = this.boardRepository.create(CreateBoardDto);
    const savedBoard = this.boardRepository.save(newBoard);
    return savedBoard;
  }

  async findAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  async findOne(id: string) {
    return this.boardRepository.findOne(id);
  }

  async update(
    id: string,
    updateBoardDto: UpdateBoardDto
  ): Promise<UpdateBoardDto> {
    const updatedboard = await this.boardRepository.update(id, updateBoardDto);
    return updatedboard.raw;
  }

  async remove(id: string) {
    await this.boardRepository.delete(id);
  }
}
