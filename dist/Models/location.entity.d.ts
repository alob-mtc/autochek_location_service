import { BaseEntity } from '@Model/base.entity';
export declare class Location extends BaseEntity {
    name: string;
    description: string;
    website: string;
    phone: string;
    contact_persion: string;
    center_location: boolean;
    lon: number;
    lat: number;
    toJSON(): Record<string, any>;
}
