import { ErrorCodes } from '@/custom-errors';

/**
 * @category Types and Interfaces
 */
export type FormooseTFunction = (
  ...args: [key: string | string[] | ErrorCodes, options?: Record<string, any>]
) => string;
