/**
 * Data Structures
 */

interface Action {
  type: string;
  payload?;
  error?: boolean;
  meta?;
}

/**
 * Extra
 */

declare module console {
  export function log(message: any, ...optionalParams: any[]): void;
}
