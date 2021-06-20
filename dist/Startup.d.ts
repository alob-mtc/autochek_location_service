import { INestApplication } from '@nestjs/common';
declare class Startup {
    protected readonly _PORT: number;
    protected readonly basePath: string;
    constructor();
    protected useRoutePrefix(app: INestApplication): void;
    protected configureOpenAPI(app: INestApplication): void;
}
export { Startup };
