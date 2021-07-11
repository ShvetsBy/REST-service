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
  @HttpCode(StatusCodes.CREATED)
  async create(
    @Param('boardId') boardId: string,
    @Body() createTaskDto: CreateTaskDto
  ) {
    return this.tasksService.create(boardId, createTaskDto);
  }

  @Get()
  @HttpCode(StatusCodes.OK)
  async findAll(@Param('boardId') boardId: string) {
    const tasks = await this.tasksService.findAll(boardId);
    if (tasks) {
      return tasks;
    } else {
      throw new NotFound('Tasks');
    }
  }

  @Get(':id')
  @HttpCode(StatusCodes.OK)
  async findOne(@Param('boardId') boardId: string, @Param('id') id: string) {
    const task = await this.tasksService.findOne(boardId, id);
    if (task) {
      return task;
    } else {
      throw new NotFound('Task');
    }
  }

  @Put(':id')
  @HttpCode(StatusCodes.OK)
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @HttpCode(StatusCodes.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
