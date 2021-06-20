"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Startup = void 0;
const swagger_1 = require("@nestjs/swagger");
const env_config_manager_1 = require("./Config/env.config.manager");
class Startup {
    constructor() {
        this.basePath = '/api/v1';
        this._PORT = parseInt(env_config_manager_1.envManager.getEnvValue('PORT'));
    }
    useRoutePrefix(app) {
        app.setGlobalPrefix(this.basePath);
    }
    configureOpenAPI(app) {
        if (!env_config_manager_1.envManager.isProduction()) {
            const document = swagger_1.SwaggerModule.createDocument(app, new swagger_1.DocumentBuilder()
                .setTitle('Autochek APIs')
                .setDescription('The Description')
                .setVersion('1.0')
                .addServer(this.basePath)
                .setContact('Akinlua Bolamigbe', '', 'bolamigbeakinlua@gmail.com')
                .build());
            swagger_1.SwaggerModule.setup('api-docs', app, document);
        }
    }
}
exports.Startup = Startup;
//# sourceMappingURL=Startup.js.map