import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import OperationEntity from './OperationEntity';

@Entity('packages')
export default class PackageEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({ type: 'timestamptz' })
    opened: Date;

  @Column({ type: 'timestamptz' })
    closed: Date;

  @Column()
    idOperation: number;

  @ManyToOne(() => OperationEntity, (operation) => operation.id, {
    eager: true,
  })
  @JoinColumn({ name: 'idOperation' })
    operation: OperationEntity;

  getPackageInfo() {
    return {
      id: this.id,
      opened: this.opened,
      closed: this.closed,
      operation: {
        value: this.operation.value,
        subOperation: this.operation?.subOperation,
        idUser: this.operation.idUser,
        child: this.operation.child,
        parent: this.operation.parent,
      },
    };
  }
}
