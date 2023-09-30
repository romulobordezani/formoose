import { ErrorCodes } from '@/custom-errors';
import { ErrorHandler } from '../../custom-errors/ErrorHandler';

/**
 * @category Validators
 * @param {string} fieldValue Value to be validated
 * @param {string} fieldName Form Field where error happened
 * @throws {FormooseError} Throws Exception when invalid
 * @returns {boolean}
 */
export function isString(fieldValue: string, fieldName: string): boolean {
  if (typeof fieldValue !== 'string') {
    ErrorHandler.throw(
      `String expected, type sent: ${typeof fieldValue} - on field: ${fieldName}`,
      fieldName,
      ErrorCodes['alphabetical-chars-only'],
      { fieldName, fieldValue }
    );
  }

  return true;
}
