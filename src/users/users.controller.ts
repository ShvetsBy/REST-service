import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Res,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFound } from 'src/errors/not-found.error';
import { TasksService } from '../tasks/tasks.service';
import { AuthGuard } from '../auth/auth.guard';
import { StatusCodes } from 'http-status-codes';
import { User } from '../users/entities/user.entity';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(
    private readonly userService: UserService,
    private readonly tasksService: TasksService
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res) {
    const newUser = await this.userService.create(createUserDto);
    res.status(StatusCodes.CREATED).send(User.toResponce(newUser));
  }

  @Get()
  async findAll(@Res() res) {
    const users = await this.userService.findAll();
    res.status(StatusCodes.OK).send(users.map(User.toResponce));
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res) {
    const user = await this.userService.findOne(id);
    if (user) {
      return res.status(StatusCodes.OK).send(User.toResponce(user));
    } else {
      throw new NotFound('User');
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res
  ) {
    const updatedUser = await this.userService.update(id, updateUserDto);
    res.status(StatusCodes.OK).send(updatedUser);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res) {
    this.tasksService.clearTasks(id);
    this.userService.remove(id);
    res.status(StatusCodes.NO_CONTENT).send();
  }
}
