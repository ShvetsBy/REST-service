import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  Res,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { NotFound } from '../errors/not-found.error';
import { AuthGuard } from 'src/auth/auth.guard';
import { StatusCodes } from 'http-status-codes';
@Controller('boards/:boardId/tasks')
// @UseGuards(AuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(
    @Param('boardId') boardId: string,
    @Body() createTaskDto: CreateTaskDto,
    @Res() res
  ) {
    const newTask = await this.tasksService.create(boardId, createTaskDto);
    res.status(StatusCodes.CREATED).send(newTask);
  }

  @Get()
  async findAll(@Param('boardId') boardId: string, @Res() res) {
    const tasks = await this.tasksService.findAll(boardId);
    if (tasks) {
      res.status(StatusCodes.OK).send(tasks);
    } else {
      throw new NotFound('Tasks');
    }
  }

  @Get(':id')
  async findOne(
    @Param('boardId') boardId: string,
    @Param('id') id: string,
    @Res() res
  ) {
    const task = await this.tasksService.findOne(boardId, id);
    if (task) {
      res.status(StatusCodes.OK).send(task);
    } else {
      throw new NotFound('Task');
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @Res() res
  ) {
    const updatedTask = await this.tasksService.update(id, updateTaskDto);
    res.status(StatusCodes.OK).send(updatedTask);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res) {
    await this.tasksService.remove(id);
    res.status(StatusCodes.NO_CONTENT).send();
  }
}
