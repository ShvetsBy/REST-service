import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as uuid from 'uuid';
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

    constructor({
        id = uuid.v4(),
        name = 'John',
        login = 'Connor',
        password = 't1'
      }: Partial<User> = {}) {
        
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
      };
    
      static toResponce(user: User): Partial<User> {
        const { id, name, login } = user;
        return { id, name, login };
      };
    
}