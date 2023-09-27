import { Role } from '../../auth/role/entities/role.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class RoleSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(Role);

    const data = [
            {
                name: 'admin'
            },
            {
                name: 'client'
            },
            {
                name: 'bartender'
            },
            {
                name: 'superadmin'
            },
        ];

    for (const role of data){

        const roleToInsert = await repository.findOneBy({ name: role.name });
    
        // Insert only one record with this name.
        if (!roleToInsert) {
          await repository.insert(role);
        }

    }
    
    // ---------------------------------------------------
    // This is the factory function execution, not needed in this case.

  }

}