export declare class LocationDTO implements Readonly<LocationDTO> {
    id: string;
    name: string;
    description: string;
    phone: string;
    website: string;
    contact_persion: string;
    center_location: boolean;
    lon: number;
    lat: number;
}
export declare class LocationUpdateDTO implements Readonly<LocationUpdateDTO> {
    name: string;
    description: string;
    phone: string;
    website: string;
    contact_persion: string;
    lon: number;
    lat: number;
}
