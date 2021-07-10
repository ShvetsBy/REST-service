import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as uuid from 'uuid';

@Entity('<Board>')
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;

  @Column('jsonb', { nullable: true })
  columns: [];

  constructor({
    id = uuid.v4(),
    title = ' ',
    columns = [],
  }: Partial<Board> = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
