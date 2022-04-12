import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Token } from '../Interfaces/TokenInterface';

@Entity('session')
export default class SessionsEntity implements Token {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    idUser: number;

  @Column()
    token: string;

  getIdUser() {
    return this.idUser;
  }
}
