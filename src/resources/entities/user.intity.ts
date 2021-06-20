import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as uuid from 'uuid';
// import { IUser } from '../users/user.interface';
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

    // constructor({ 
    //     name = 'John',
    //     login = 'Connor',
    //     password = 't1' }: Partial<IUser> = {}) 
        
    //     {
    //     this.id = uuid.v4();
    //     this.name = name;
    //     this.login = login;
    //     this.password = password;
    //   }
    
    //   // public static toResponse(user): UserToResponce {
    //   static toResponse(user: IUser) {
    //     const { id, name, login } = user;
    //     return { id, name, login };
    //   }
    
}