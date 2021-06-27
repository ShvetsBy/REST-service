import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as uuid from 'uuid';
import bcrypt from 'bcrypt';

@Entity('<User>')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @Column('varchar')
    login: string;

    @Column('varchar')
    password: string;

    @BeforeInsert()
    async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);
    }

    constructor({
      id = uuid.v4(),
      name = 'John',
      login = 'Connor',
      password = 't1',
    }: Partial<User> = {}) {
      this.id = id;
      this.name = name;
      this.login = login;
      this.password = password;
    }

    static toResponce(user: User): Partial<User> {
      const { id, name, login } = user;
      return { id, name, login };
    }
}
