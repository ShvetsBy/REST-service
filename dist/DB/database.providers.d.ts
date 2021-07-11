import { ConfigModule, ConfigService } from '@nestjs/config';
export declare const databaseProviders: {
    provide: string;
    imports: (typeof ConfigModule)[];
    useFactory: () => Promise<import("typeorm").Connection>;
    inject: (typeof ConfigService)[];
}[];
