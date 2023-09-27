import { SetMetadata } from '@nestjs/common';
import { ERole } from '../interfaces/enums';

export const ROLES_KEY = 'roles';
export const Roles = (role: ERole[] | ERole) => SetMetadata(ROLES_KEY, role)