import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { boardProviders } from './boards.providers';
import { DatabaseModule } from '../../DB/database.module';
import { taskProviders } from '../tasks/tasks.providers';
import { TasksService } from '../tasks/tasks.service';
@Module({
  imports: [DatabaseModule],
  providers: [...boardProviders, BoardsService, ...taskProviders, TasksService],
  controllers: [BoardsController],
  exports: [BoardsService],
})
export class BoardsModule {}
