"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormConfigManager = exports.TypeormConfigManager = void 0;
const env_config_manager_1 = require("./env.config.manager");
class TypeormConfigManager extends env_config_manager_1.EnvManager {
    constructor() {
        super(process.env);
    }
    getTypeOrmConfig() {
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
exports.TypeormConfigManager = TypeormConfigManager;
exports.typeormConfigManager = new TypeormConfigManager();
//# sourceMappingURL=typeorm.config.manger.js.map