import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Put,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFound } from 'src/errors/not-found.error';
import { TasksService } from '../tasks/tasks.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UserService,
    private readonly tasksService: TasksService
  ) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const newUser = this.userService.create(createUserDto);
    return CreateUserDto.toResponce(await newUser);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    if (user) {
      return user;
    } else {
      throw new NotFound('User');
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.tasksService.clearTasks(id);
    return this.userService.remove(id);
  }
}
