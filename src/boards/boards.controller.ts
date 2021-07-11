import {
  Controller,
  Body,
  Param,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { NotFound } from 'src/errors/not-found.error';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/createboard.dto';
import { UpdateBoardDto } from './dto/updateboard.dto';
import { TasksService } from '../tasks/tasks.service';
import { AuthGuard } from '../auth/auth.guard';
import { StatusCodes } from 'http-status-codes';
@Controller('boards')
// @UseGuards(AuthGuard)
export class BoardsController {
  constructor(
    private readonly boardService: BoardsService,
    private readonly tasksService: TasksService
  ) {}

  @Post()
  @HttpCode(StatusCodes.CREATED)
  async create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.create(createBoardDto);
  }

  @Get()
  @HttpCode(StatusCodes.OK)
  async findAll() {
    const boards = await this.boardService.findAll();
    if (boards) {
      return boards;
    } else {
      throw new NotFound('Boards');
    }
  }

  @Get(':id')
  @HttpCode(StatusCodes.OK)
  async findOne(@Param('id') id: string) {
    const board = await this.boardService.findOne(id);
    if (board) {
      return board;
    } else {
      throw new NotFound('Board');
    }
  }

  @Put(':id')
  @HttpCode(StatusCodes.OK)
  async update(
    @Param('id') id: string,
    @Body() updateBoardDto: UpdateBoardDto
  ) {
    return this.boardService.update(id, updateBoardDto);
  }

  @Delete(':id')
  @HttpCode(StatusCodes.NO_CONTENT)
  async remove(@Param('id') id: string) {
    this.tasksService.deleteBoardTasks(id);
    return this.boardService.remove(id);
  }
}
