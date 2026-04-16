import type { StudioAccessConfig } from "../types/handler.js";
export type AccessEvaluationInput = {
    accessConfig?: StudioAccessConfig;
    path: string;
    method: string;
    headers: Record<string, string>;
    ip?: string | null;
};
export type AccessEvaluationResult = {
    allowed: true;
    ipAddress: string | null;
} | {
    allowed: false;
    ipAddress: string | null;
    reason: "ip_not_allowed" | "ip_blocked";
    message: string;
};
export declare function extractClientIp(headers: Record<string, string>, fallbackIp?: string | null): string | null;
export declare function evaluateRequestAccess(input: AccessEvaluationInput): AccessEvaluationResult;
