import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    userId!: string;

    @Column('varchar')
    name!: string;

    @Column('varchar')
    login!: string;

    @Column('varchar')
    password!: string;
}