import { BaseEntity } from 'src/common/baseEntity';
import { Entity, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  role: string;

}