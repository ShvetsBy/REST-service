import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [UserModule, BoardsModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
