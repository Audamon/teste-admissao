import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import { Users } from '../Interfaces/UserInterface';
import OperationEntity from './OperationEntity';

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

  @OneToMany(() => OperationEntity, (operation) => operation.id)
    operation: OperationEntity;

  getUser() {
    const obj = {
      name: this.name,
      adress: this.adress,
      cpf: this.cpf,
      birthday: this.birthday,
    };
    return obj;
  }
}
