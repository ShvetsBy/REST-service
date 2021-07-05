import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [UserModule, BoardsModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
