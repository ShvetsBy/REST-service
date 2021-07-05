import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as uuid from 'uuid';

@Entity('<Task>')

export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    title: string;

    @Column('integer')
    order: number;

    @Column('varchar')
    description: string;

    @Column('varchar', { nullable: true })
    userId: string | null;

    @Column('varchar', { nullable: true })
    columnId: string;

    @Column('varchar', { nullable: false })
    boardId: string;

    constructor({
      id = uuid.v4(),
      title = 'Buy the glasses',
      order = 0,
      description = 'and motorcycle',
      userId = '',
      boardId = '1',
      columnId = '2',

    }: Partial<Task> = {}) {
      this.id = id;
      this.title = title;
      this.order = order;
      this.description = description;
      this.userId = userId;
      this.columnId = columnId;
      this.boardId = boardId;
    }
}

