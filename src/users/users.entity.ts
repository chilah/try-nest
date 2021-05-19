import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  firstname: string;

  @Column({ length: 200 })
  lastname: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
