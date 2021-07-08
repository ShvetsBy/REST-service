import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { LoggerModule } from './utils/logger/logger.module';

@Module({
  imports: [UserModule, BoardsModule, TasksModule, AuthModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
