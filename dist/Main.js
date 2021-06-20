"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./Modules/app.module");
const Startup_1 = require("./Startup");
class Program extends Startup_1.Startup {
    Configure(app) {
        this.configureOpenAPI(app);
        this.useRoutePrefix(app);
    }
    async Run() {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
        this.Configure(app);
        await app.listen(this._PORT);
    }
}
new Program().Run();
//# sourceMappingURL=Main.js.map