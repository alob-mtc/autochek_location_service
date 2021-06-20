import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvManager } from './env.config.manager';

export class TypeormConfigManager extends EnvManager {
   constructor() {
      super(process.env);
   }

   public getTypeOrmConfig(): TypeOrmModuleOptions {
      return {
         type: 'postgres',

         host: this.getEnvValue('DB_HOST'),
         port: parseInt(this.getEnvValue('DB_PORT')),
         username: this.getEnvValue('DB_USERNAME'),
         password: this.getEnvValue('DB_PASSWORD'),
         database: this.getEnvValue('DB_DATABASE'),

         synchronize: this.getEnvValue('TYPEORM_DATABASE_SYNC') == 'true',

         entities: ['dist/**/*.entity{.ts,.js}'],

         migrationsTableName: 'TypeormMigrations',

         migrations: ['dist/Migrations/*{.ts,.js}'],

         cli: {
            migrationsDir: 'src/Migrations',
         },
         autoLoadEntities: true,
         ssl: this.isProduction(),
      };
   }
}

export const typeormConfigManager = new TypeormConfigManager();
