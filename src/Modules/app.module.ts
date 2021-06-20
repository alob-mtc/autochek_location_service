import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '@Root/Controllers/app.controller';
import { AppService } from '@Service/app.service';
import { typeormConfigManager } from '@Root/Config/typeorm.config.manger';
import { LocationModule } from '@Root/Modules/location.module';

@Module({
   imports: [TypeOrmModule.forRoot(typeormConfigManager.getTypeOrmConfig()), LocationModule],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
