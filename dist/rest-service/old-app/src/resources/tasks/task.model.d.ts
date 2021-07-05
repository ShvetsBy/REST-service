import { ITask } from './task.interface';
declare class Task implements ITask {
    id: string;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    columnId: string;
    boardId: string;
    constructor({ title, order, description, userId, columnId, boardId, }: ITask);
}
export { Task };
