import { Controller, Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { DatabaseModule } from '../../DB/database.module';
import { TasksController } from './tasks.controller';
import { taskProviders } from './tasks.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController],
  providers: [...taskProviders, TasksService],
  exports: [TasksService],
})
export class TasksModule {}
