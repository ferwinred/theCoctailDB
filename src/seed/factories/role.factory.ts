import { setSeederFactory } from 'typeorm-extension';

import { Role } from '../../auth/role/entities/role.entity';
import { ERole } from '../../common/interfaces/enums';


export default setSeederFactory(Role, async (faker) => {
  const role = new Role();
 
  role.name = faker.helpers.arrayElement([
   ERole.BARTENDER,
   ERole.CLIENT,
   ERole.SUPERADMIN
  ]);

  return role;
});