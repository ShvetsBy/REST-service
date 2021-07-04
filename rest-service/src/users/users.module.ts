import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../DB/database.module';
import { userProviders } from './users.providers';
import { UserService } from './users.service';
import { UsersController } from './users.controller';

@Module({
imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UserService,
  ],
  controllers: [UsersController],
  exports: [UserService]
})
export class UserModule {}