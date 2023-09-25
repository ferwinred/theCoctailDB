import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { RoleModule } from './role/role.module';
import { UserService } from './user/user.service';
import { Role } from './role/entities/role.entity';
import { RoleService } from './role/role.service';

@Module({
  imports: [
        TypeOrmModule.forFeature([User, Role]), 
        UserModule, 
        RoleModule
    ],
  controllers: [AuthController],
  providers: [
        AuthService, 
        UserService, 
        RoleService
    ],
})
export class AuthModule {}