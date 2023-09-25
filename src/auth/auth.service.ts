import { Injectable } from '@nestjs/common';
import { RegisterDto, LoginDto } from './dto';
import { UserService } from './user/user.service';

/**
 * @class 
 * Auth Service Provider
 * 
 */
@Injectable()
export class AuthService {
  
constructor(private readonly userService: UserService){}

  async register(registerDto: RegisterDto) {
    return registerDto;
  }

  async login (loginDto: LoginDto) {
    return loginDto;
  }

}
