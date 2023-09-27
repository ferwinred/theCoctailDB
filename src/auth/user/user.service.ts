import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';

import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from '../../common/dto/pagination.dto';

/**
 * @class 
 * User Service Provider
 * 
 * 
 */

@Injectable()
export class UserService {

  constructor( @InjectRepository(User) private readonly userRepository: Repository<User> ){}

  /**
   * 
   * @description Create a new user
   * 
   * @param {CreateUserDto} createUserDto body transformed into User DTO object to create a new user
   * 
   * @returns Promise<User{}>
   * 
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);

    return this.userRepository.save(user);
  }

  /**
   * @description Find all users registered in the APP
   * 
   * @param {PaginationDto} pagination This object contains the following properties:
   * 
   * - offset: Number of the position of the first object to retrieve from database, by default is 0
   * - limit: Number of objects to retrieve from database, by default is 10, the maximum value is 100
   * 
   * @returns Promise<User[]>
   */
  async findAll({ offset=0, limit=10 }: PaginationDto): Promise<User[]>{
    const users = await this.userRepository.find({
      take: limit,
      skip: offset
    });

    if (users.length === 0) {
      throw new NotFoundException("Users not found");
    }

    return users;
  }

  /**
   * 
   * @description Find one user by Id
   * 
   * @param {String} id Identifier of the user to find
   * 
   * @returns Promise<User{}>
   * 
   */
  async findOne(id: string): Promise<User>{
    const user = await this.userRepository.findOne({
                                        where: {id: id }
                                      });
                                      
    if (!user) {
      throw new NotFoundException(`User with Id ${id} not found`);
    }

    return user;
  }

  /**
   * 
   * @description Modify a user by Id
   * 
   * @param {UpdateUserDto} updateUserDto body transformed into User DTO object to update a new user
   * 
   * @returns Promise<UpdateResult{}>
   * 
   */
  async update(id: string, updateUserDto: UpdateUserDto) {
  
    const user = await this.userRepository.update({ id }, updateUserDto);
    console.log(user)
    if (!user) {
      throw new NotFoundException(`User with Id ${id} not found`);
    }

    return `User with Id ${id} was successfully updated`;
  }
  /**
   * 
   * @description Delete a user by Id
   * 
   * @param {string} id Identifier of the user to be logic deleted
   * 
   * @returns Promise<UpdateResult{}>
   * 
   */
  async remove(id: string) {

    const user = await this.userRepository.update({ id, is_deleted: false }, {
      is_deleted: true,
    });
    
    if (user.affected !== 1) {
      throw new NotFoundException(`User with Id ${id} not found`);
    }
    
    await this.userRepository.softDelete(id);

    return `User with Id ${id} was successfully deleted`;
  }

  /**
   * 
   * @description Find a user by Email
   * 
   * @param {string} email Email of the user to find
   * 
   * @returns Promise<User{}>
   * 
   */
  async findByEmailWithPassword(email: string): Promise<User> {
    try {
      
      const user = await this.userRepository.findOne({
        where: {
          email: email,
        }, 
        select: [ 'password', 'id', 'full_name', 'email', 'role']
      });
  
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
