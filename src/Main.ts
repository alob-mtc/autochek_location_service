import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@Core/app.module';
import { Startup } from '@Root/Startup';

class Program extends Startup {
   public Configure(app: INestApplication): void {
      this.configureOpenAPI(app);

      this.useRoutePrefix(app);
   }

   public async Run(): Promise<void> {
      const app = await NestFactory.create(AppModule, { cors: true });

      this.Configure(app);

      await app.listen(this._PORT);
   }
}

new Program().Run();
