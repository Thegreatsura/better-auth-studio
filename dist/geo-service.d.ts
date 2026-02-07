export interface LocationData {
    country: string;
    countryCode: string;
    city: string;
    region: string;
}
export declare function setGeoDbPath(path: string | null): void;
export declare function initializeGeoService(): Promise<void>;
/**
 * Resolve IP to location. Uses iplocation (ipapi.co) first for accuracy;
 * on failure or reserved IP, falls back to maxmind → default-geo.json → hardcoded ranges.
 */
export declare function resolveIPLocation(ipAddress: string): Promise<LocationData | null>;
//# sourceMappingURL=geo-service.d.ts.map