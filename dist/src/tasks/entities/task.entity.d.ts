export declare class Task {
    id: string;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    columnId: string;
    boardId: string;
    constructor({ id, title, order, description, userId, boardId, columnId, }?: Partial<Task>);
}
