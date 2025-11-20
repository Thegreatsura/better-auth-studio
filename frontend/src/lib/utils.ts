import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function executeMigrationScript(script: string) {
  try {
    return eval(script);
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error.message,
    };
  }
}