import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) {}

  async create(CreateUserDto: CreateUserDto): Promise<CreateUserDto> {
    const newUser = this.userRepository.create(CreateUserDto);
    const savedUser = this.userRepository.save(newUser);
    return savedUser;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto
  ): Promise<UpdateUserDto> {
    const updatedUser = await this.userRepository.update(id, updateUserDto);
    return updatedUser.raw;
  }

  async remove(id: string) {
    await this.userRepository.delete(id);
  }
}
