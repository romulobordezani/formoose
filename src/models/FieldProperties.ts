import { CustomError } from '.';

/**
 * @category Types and Interfaces
 */
export interface FieldProperties {
  error?: CustomError;
  message?: string;
  value?: any;
}
