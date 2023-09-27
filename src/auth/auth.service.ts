import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto, LoginDto } from './dto';
import { UserService } from './user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';

/**
 * @class 
 * Auth Service Provider
 * 
 */
@Injectable()
export class AuthService {
  
constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ){}

/**
* 
* @description Register a new User in the APP
* 
* @param {RegisterDto} registerDto this object has the following properties:
* 
* - full_name: Complete name of the user to register
* - email: The unique email associated to the user to register
* - password: The password that the user to register will be use to authenticate in the APP
* - phone: The phone number of the user to register
* - role: The role of the user to register, the default value is client
* 
* @returns Promise<User{}>
* 
*/
async register({ full_name, email, password, role, phone }: RegisterDto) {
    try {
        const user = await this.userService.findByEmailWithPassword(email);

        if (user) throw new BadRequestException(`This Email is already registered`);

        const hashPassword = await bcryptjs.hash(password, 12);

        const newUser = await this.userService.create({
            full_name,
            email,
            password: hashPassword,
            phone,
            role
        });

        return newUser;
        
    } catch (error) {
        throw new BadRequestException(error);
    }

  }

  /**
* 
* @description Register a new User in the APP
* 
* @param {LoginDto} loginDto This object contains the login information to authenticate a user in the APP
* 
* @returns Promise<{ token: string, user: string, role: string }>
* 
*/
async login (loginDto: LoginDto) {
    const user = await this.userService.findByEmailWithPassword(loginDto.email);

        if (!user) throw new UnauthorizedException(`Wrong email or password`);

        const isValidPassword = await bcryptjs.compare(loginDto.password, user.password);

        if (!isValidPassword) throw new UnauthorizedException(`Wrong email or password`);

        const payload = {
            email: user.email, 
            role: user.role
        }

        try {
            
            const token = await this.jwtService.signAsync(payload);
    
            return {
                token,
                user: user.id,
                role: user.role
            };
        } catch (error) {
            throw new UnauthorizedException(`Invalid Token`);
        }
  }

}
