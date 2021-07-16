import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>
  ) {}

  async create(
    boardId: string,
    createTaskDto: CreateTaskDto
  ): Promise<CreateTaskDto> {
    const newTask = await this.taskRepository.create(createTaskDto);
    newTask.boardId = boardId;
    const savedTask = await this.taskRepository.save(newTask);
    return savedTask;
  }

  async findAll(boardId: string): Promise<Task[]> {
    return await this.taskRepository.find({ where: { boardId } });
  }

  async findOne(boardId: string, id: string) {
    return await this.taskRepository.findOne(id, { where: { boardId } });
  }

  async update(
    id: string,
    updateTaskDto: UpdateTaskDto
  ): Promise<UpdateTaskDto> {
    const updatedTask = await this.taskRepository.update(id, updateTaskDto);
    return updatedTask.raw;
  }

  async remove(id: string) {
    await this.taskRepository.delete(id);
  }

  async deleteBoardTasks(boardId: string) {
    try {
      const tasks = await this.findAll(boardId);
      if (tasks) {
        (await tasks).map((task) => {
          if (task.boardId === boardId) {
            this.remove(task.id);
            return true;
          }
          return false;
        });
      }
    } catch (e) {
      throw new Error(e);
    }
  }
  async clearTasks(id: string | null) {
    await this.taskRepository
      .createQueryBuilder()
      .update(Task)
      .set({ userId: null })
      .where('userId = :id', { id })
      .execute();
  }
}
