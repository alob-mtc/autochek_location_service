import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { envManager } from '@Root/Config/env.config.manager';

class Startup {
   protected readonly _PORT: number;
   protected readonly basePath: string;

   constructor() {
      this.basePath = '/api/v1';
      this._PORT = parseInt(envManager.getEnvValue('PORT'));
   }

   protected useRoutePrefix(app: INestApplication): void {
      app.setGlobalPrefix(this.basePath);
   }

   protected configureOpenAPI(app: INestApplication): void {
      if (!envManager.isProduction()) {
         const document = SwaggerModule.createDocument(
            app,
            new DocumentBuilder()
               .setTitle('Autochek APIs')
               .setDescription('The Description')
               .setVersion('1.0')
               .addServer(this.basePath)
               .setContact('Akinlua Bolamigbe', '', 'bolamigbeakinlua@gmail.com')
               .build(),
         );
         SwaggerModule.setup('api-docs', app, document);
      }
   }
}

export { Startup };
