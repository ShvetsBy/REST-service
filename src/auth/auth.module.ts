import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../DB/database.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { userProviders } from '../users//users.providers';
import { UserService } from '../users//users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [...userProviders, UserService, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
