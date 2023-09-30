import { ErrorCodes } from '@/custom-errors';

/**
 * @category Types and Interfaces
 */
export interface CustomError {
  message: string;
  name: string;
  field?: string;
  translatedMessageKey?: ErrorCodes | string;
  translatedMessageInterpolators?: Record<string, string>;
}
