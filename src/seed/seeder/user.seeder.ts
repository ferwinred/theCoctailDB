import { hash } from 'bcryptjs';
import { User } from '../../auth/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { ERole } from '../../common/interfaces/enums';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {

    const user = {
        full_name: 'Ferwin',
        password: await hash('Secret123', 12),
        email: 'ferwin@admin.com',
        phone: '+573003333333',
        role: ERole.SUPERADMIN,
    }

    const repository = dataSource.getRepository(User);

    
    const userToInsert = await repository.findOneBy({ email: user.email });
    
    // Insert only one record with this name.
    if (!userToInsert) {
        await repository.insert([user]);
    }

    // ---------------------------------------------------
    // This is the factory function execution, not needed in this case.

    const userFactory = await factoryManager.get(User);

        // save 1 factory generated entity, to the database
        await userFactory.save();

        // save 5 factory generated entities, to the database
        await userFactory.saveMany(2);
  }

}