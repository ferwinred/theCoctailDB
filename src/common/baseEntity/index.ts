import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column } from 'typeorm';

/**
 * @abstract Entity
 */
@Entity()
export class BaseEntity {

    /** @member {string}  id - The unique internal identifier of the object */
    @PrimaryGeneratedColumn('uuid')
    id: string;

    /** @member {string}  is_deleted - Boolean property to idenfy if the object was logical deleted */
    @Column({
        default: false,
    })
    is_deleted: boolean;
  
    /** @member {string}  createdAt - The creation's Date of the object  */
    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date;

    /** @member {string}  updatedAt - The last modification's Date of the object  */
    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt: Date;

    /** @member {string}  deletedAt - The logical deletion's Date of the object  */
    @DeleteDateColumn({
        name: 'deleted_at',
        type: 'timestamp',
        default: null
    })
    deletedAt: Date;
}
