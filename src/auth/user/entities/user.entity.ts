import { Role } from '../../../auth/role/entities/role.entity';
import { BaseEntity } from '../../../common/baseEntity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

/**
 * @class Entity
 * @extends BaseEntity
 */
@Entity()
export class User extends BaseEntity {

  /** @member {string}  full_name - The User fullname */
  @Column({
    nullable: false
  })
  full_name: string;

  /** @member {string}  email - The unique associated email of the user */
  @Column({
    nullable: false,
    unique: true,
  })
  email: string;

  /** @member {string}  password - The encrypted user's password */
  @Column({
    nullable: false,
  })
  password: string;

  /** @member {string}  phone - The user's phone number with country code */
  @Column()
  phone: string;

  /** @member {string}  role - The user's role */
  // @Column()
  // role: string;
  @ManyToOne(() => Role)
   @JoinColumn({
       name: 'role',
       referencedColumnName: 'name'
   })
   role: string;

}