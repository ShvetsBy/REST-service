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
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFound } from 'src/errors/not-found.error';
import { TasksService } from '../tasks/tasks.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(
    private readonly userService: UserService,
    private readonly tasksService: TasksService
  ) {}

  @Post()
 
  @HttpCode(201)
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
  @HttpCode(204)
  remove(@Param('id') id: string) {
    this.tasksService.clearTasks(id);
    return this.userService.remove(id);
  }
}
