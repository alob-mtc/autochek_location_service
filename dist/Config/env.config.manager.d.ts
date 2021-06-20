import 'dotenv/config';
export declare class EnvManager {
    private env;
    constructor(env: {
        [k: string]: string | undefined;
    });
    private expectedEnvValues;
    getEnvValue(key: string, throwOnMissing?: boolean): string;
    ensureEnvValues(): EnvManager;
    isProduction(): boolean;
}
declare const envManager: EnvManager;
export { envManager };
