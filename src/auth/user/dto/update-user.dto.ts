import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: string
  full_name: string
  email: string
  password: string
  is_deleted: boolean
  phone: string
  role: string
}
