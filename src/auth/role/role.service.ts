import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto, UpdateRoleDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from '../../common/dto/pagination.dto';

/**
 * @class 
 * Role Service Provider
 * 
 * 
 */
@Injectable()
export class RoleService {

  constructor(@InjectRepository(Role) private readonly roleRepository: Repository<Role>){}
  
  /**
   * 
   * @description Create a new role
   * 
   * @param {CreateRoleDto} createRoleDto body transformed into Role DTO object to create a new role
   * 
   * @returns Promise<Role{}>
   * 
   */
  async create(createRoleDto: CreateRoleDto): Promise<Role> {

    const role = this.roleRepository.create(createRoleDto);

    return await this.roleRepository.save(role);
  }

  /**
   * @description Find all roles registered in the APP
   * 
   * @param {PaginationDto} pagination This object contains the following properties:
   * 
   * - offset: Number of the position of the first object to retrieve from database, by default is 0
   * - limit: Number of objects to retrieve from database, by default is 10, the maximum value is 100
   * 
   * 
   * @returns Promise<Role[]>
   */
  async findAll({offset=0 ,limit=10}: PaginationDto): Promise<Role[]> {
    return await this.roleRepository.find({
      take: limit,
      skip: offset
    });
  }

  /**
   * 
   * @description Find one Role by Id
   * 
   * @param {String} id Identifier of the Role to find
   * 
   * @returns Promise<Role{}>
   * 
   */
  async findOne(id: string): Promise<Role> {
    const role = await this.roleRepository.findOne({ where: {id}});

    if (!role) {
      throw new NotFoundException(`Role with Id ${id} not found`);
    }

    return role;
  }

    /**
   * 
   * @description Modify a Role by Id
   * 
   * @param {UpdateRoleDto} updateRoleDto body transformed into Role DTO object to update a new Role
   * 
   * @returns Promise<UpdateResult{}>
   * 
   */
  async update(id: string, updateRoleDto: UpdateRoleDto) {
    const role = await this.roleRepository.update({ id }, updateRoleDto);

    if (!role) {
      throw new NotFoundException(`Role with Id ${id} not found`);
    }

    return `Role with Id ${id} was successfully updated`;
  }

    /**
   * 
   * @description Delete a Role by Id
   * 
   * @param {string} id Identifier of the Role to be logic deleted
   * 
   * @returns Promise<UpdateResult{}>
   * 
   */
  async remove(id: string) {
    
    const role = await this.roleRepository.update({ id, is_deleted: false }, {
      is_deleted: true,
    });
    
    if (role.affected !== 1) {
      throw new NotFoundException(`User with Id ${id} not found`);
    }
    
    await this.roleRepository.softDelete(id);

    return `Role with Id ${id} was successfully deleted`;
  }
}
