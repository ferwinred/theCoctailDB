import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './auth/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RoleModule } from './auth/role/role.module';
import { User } from './auth/user/entities/user.entity';
import { Role } from './auth/role/entities/role.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME'),
        entities: [User, Role],
        synchronize: true
      })
    }),
    AuthModule,
    UserModule,
    RoleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}