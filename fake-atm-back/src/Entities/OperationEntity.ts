import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, 
} from 'typeorm';
import UserEntity from './UserEntity';

@Entity('operation')
export default class OperationEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    value: string;

  @Column()
    subOperation: number;

  @Column()
    idUser: number;

  @ManyToOne(() => OperationEntity, (operation) => operation.child)
    child: OperationEntity;

  @OneToMany(() => OperationEntity, (operation) => operation.parent)
    parent: OperationEntity[];

  @ManyToOne(() => UserEntity, (user) => user.id)
    user: UserEntity;
}
