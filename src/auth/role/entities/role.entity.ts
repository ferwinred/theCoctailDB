import { BaseEntity } from '../../../common/baseEntity';
import { Entity, Column } from 'typeorm';

/**
 * @class Entity
 * @extends BaseEntity
 */
@Entity()
export class Role extends BaseEntity {

  /** @member {string}  name - The Role's name*/
  @Column({
    unique: true,
    nullable: false,
  })
  name: string;

}