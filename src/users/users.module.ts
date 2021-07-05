import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../DB/database.module';
import { userProviders } from './users.providers';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { taskProviders } from '../tasks/tasks.providers';
import { TasksService } from '../tasks/tasks.service';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UserService, ...taskProviders, TasksService],
  controllers: [UsersController],
  exports: [UserService],
})
export class UserModule {}
