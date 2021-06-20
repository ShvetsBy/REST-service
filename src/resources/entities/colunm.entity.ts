import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as uuid from 'uuid';

@Entity('<BoardColumns>')
export class BoardColumns {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('integer')
    order: number;

    @Column('varchar')
    title: string;

    constructor({
      id = uuid.v4(),
      order = 0,
      title = ' ',

    }) {
      this.id = id;
      this.order = order;
      this.title = title;
    }
}
