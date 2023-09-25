import { BaseEntity } from 'src/common/baseEntity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Role extends BaseEntity {

  @Column()
  name: string;

}