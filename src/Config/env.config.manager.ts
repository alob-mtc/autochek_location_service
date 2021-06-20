import 'dotenv/config';

export class EnvManager {
   constructor(private env: { [k: string]: string | undefined }) {}

   private expectedEnvValues(): string[] {
      const program = ['MODE', 'PORT'];
      return [...program];
   }

   public getEnvValue(key: string, throwOnMissing = true): string {
      const value = this.env[key]!;
      if (!value && throwOnMissing) {
         throw new Error(`\tmissing env.${key}.\n \n\tPlease add ${key} in .env file\n`);
      }

      return value;
   }

   public ensureEnvValues() {
      this.expectedEnvValues().forEach((k) => this.getEnvValue(k, true));
      return new EnvManager(process.env);
   }

   public isProduction() {
      const mode = this.getEnvValue('MODE', false);
      return mode != 'DEV';
   }
}

const envManager = new EnvManager(process.env).ensureEnvValues();

export { envManager };
