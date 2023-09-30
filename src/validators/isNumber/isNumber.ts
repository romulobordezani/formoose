import { ErrorCodes, ErrorHandler } from '@/custom-errors';

/**
 * @category Validators
 * @param {string} fieldValue Value to be validated
 * @param {string} fieldName Form Field where error happened
 * @throws {FormooseError} Throws Exception when invalid
 * @returns {boolean}
 */
export function isNumber(fieldValue: any, fieldName: string): boolean {
  if (typeof fieldValue !== 'number') {
    ErrorHandler.throw(
      `Number expected, type sent: ${typeof fieldValue} - on field: ${fieldName}`,
      fieldName,
      ErrorCodes['is-not-a-number'],
      { fieldName, fieldValue }
    );
  }

  return true;
}
