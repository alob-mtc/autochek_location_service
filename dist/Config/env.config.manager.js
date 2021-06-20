"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envManager = exports.EnvManager = void 0;
require("dotenv/config");
class EnvManager {
    constructor(env) {
        this.env = env;
    }
    expectedEnvValues() {
        const program = ['MODE', 'PORT'];
        return [...program];
    }
    getEnvValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`\tmissing env.${key}.\n \n\tPlease add ${key} in .env file\n`);
        }
        return value;
    }
    ensureEnvValues() {
        this.expectedEnvValues().forEach((k) => this.getEnvValue(k, true));
        return new EnvManager(process.env);
    }
    isProduction() {
        const mode = this.getEnvValue('MODE', false);
        return mode != 'DEV';
    }
}
exports.EnvManager = EnvManager;
const envManager = new EnvManager(process.env).ensureEnvValues();
exports.envManager = envManager;
//# sourceMappingURL=env.config.manager.js.map