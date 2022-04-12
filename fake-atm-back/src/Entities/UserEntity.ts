import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Users } from '../Interfaces/UserInterface';

@Entity('users')
export default class UserEntity implements Users {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    adress: string;

  @Column()
    cpf: string;

  @Column()
    birthday: string;

  @Column()
    encryptedPassword: string;

  getId() {
    return this.id;
  }
}
