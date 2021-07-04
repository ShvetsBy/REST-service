import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { boardProviders } from './boards.providers';
import { DatabaseModule } from '../../DB/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...boardProviders,
    BoardsService],
  controllers: [BoardsController],
  exports: [BoardsService]
})
export class BoardsModule {}
