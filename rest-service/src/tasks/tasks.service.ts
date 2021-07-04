import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>,
  ) {}

  async create(boardId: string, createTaskDto: CreateTaskDto): Promise<CreateTaskDto> {
    const newTask = this.taskRepository.create(createTaskDto);
    const savedTask = this.taskRepository.save(newTask);
    newTask.boardId = boardId;
    return savedTask;
  }

  async findAll(boardId: string): Promise<Task[]> {
    return this.taskRepository.find({ where: { boardId } });
  }

  async findOne(boardId: string, id: string) {
    return this.taskRepository.findOne(id, { where: { boardId } });
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<UpdateTaskDto> {
    //const taskToEdit = this.taskRepository.find({ where: { boardId } });
    const updatedTask = await this.taskRepository.update(id, updateTaskDto);
    return updatedTask.raw;
  }

  async remove(id: string) {
    return await this.taskRepository.delete(id);
  }
}
