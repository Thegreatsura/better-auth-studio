import fs from 'fs';
import path from 'path';

export interface TsConfig {
  compilerOptions?: {
    paths?: Record<string, string[]>;
    baseUrl?: string;
    [key: string]: any;
  };
  references?: Array<{
    path: string;
  }>;
  [key: string]: any;
}

export function getTsconfigInfo(cwd?: string, tsconfigPath?: string): TsConfig {
  const configPath = tsconfigPath || path.join(cwd || process.cwd(), 'tsconfig.json');

  if (!fs.existsSync(configPath)) {
    return {};
  }

  try {
    const content = fs.readFileSync(configPath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.warn(`Failed to parse tsconfig.json at ${configPath}:`, error);
    return {};
  }
}
