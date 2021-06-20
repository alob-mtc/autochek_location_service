import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvManager } from './env.config.manager';
export declare class TypeormConfigManager extends EnvManager {
    constructor();
    getTypeOrmConfig(): TypeOrmModuleOptions;
}
export declare const typeormConfigManager: TypeormConfigManager;
