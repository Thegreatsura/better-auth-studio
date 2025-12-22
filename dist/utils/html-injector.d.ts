export interface StudioMetadata {
    title?: string;
    logo?: string;
    favicon?: string;
    company?: {
        name?: string;
        website?: string;
    };
    theme?: 'light' | 'dark';
    customStyles?: string;
}
export interface StudioConfig {
    basePath?: string;
    metadata?: StudioMetadata;
    auth?: any;
    allowAccess?: (session: any) => Promise<boolean> | boolean;
    [key: string]: any;
}
export interface WindowStudioConfig {
    basePath: string;
    metadata: Required<StudioMetadata>;
}
export declare function serveIndexHtml(publicDir: string, config?: Partial<StudioConfig>): string;
//# sourceMappingURL=html-injector.d.ts.map