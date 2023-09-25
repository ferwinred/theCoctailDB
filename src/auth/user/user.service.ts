import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

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
   * @returns Promise<User[]>
   */
  async findAll(): Promise<User[]>{
    const users = await this.userRepository.find();

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

    if (!user) {
      throw new NotFoundException(`User with Id ${id} not found`);
    }

    return user;
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

    const user = await this.userRepository.softDelete(id);

    if (!user) {
      throw new NotFoundException(`User with Id ${id} not found`);
    }

    return user;
  }

  async findByEmailWithPassword(email: string) {
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
