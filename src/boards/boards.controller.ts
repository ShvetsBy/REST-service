import {
  Controller,
  Body,
  Param,
  Delete,
  Get,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { NotFound } from 'src/errors/not-found.error';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/createboard.dto';
import { UpdateBoardDto } from './dto/updateboard.dto';
import { TasksService } from '../tasks/tasks.service';
import { AuthGuard } from '../auth/auth.guard';
import { StatusCodes } from 'http-status-codes';
@Controller('boards')
@UseGuards(AuthGuard)
export class BoardsController {
  constructor(
    private readonly boardService: BoardsService,
    private readonly tasksService: TasksService
  ) {}

  @Post()
  async create(@Body() createBoardDto: CreateBoardDto, @Res() res) {
    const newBoard = await this.boardService.create(createBoardDto);
    res.status(StatusCodes.CREATED).send(newBoard);
  }

  @Get()
  async findAll(@Res() res) {
    const boards = await this.boardService.findAll();
    if (boards) {
      res.status(StatusCodes.OK).send(boards);
    } else {
      throw new NotFound('Boards');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res) {
    const board = await this.boardService.findOne(id);
    if (board) {
      return res.status(StatusCodes.OK).send(board);
    } else {
      throw new NotFound('Board');
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBoardDto: UpdateBoardDto,
    @Res() res
  ) {
    const updatedBoard = await this.boardService.update(id, updateBoardDto);
    res.status(StatusCodes.OK).send(updatedBoard);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res) {
    await this.boardService.remove(id);
    await this.tasksService.deleteBoardTasks(id);
    res.status(StatusCodes.NO_CONTENT).send();
  }
}
