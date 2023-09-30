import { ErrorCodes, ErrorHandler } from '@/custom-errors';

/**
 * @category Validators
 * @param {string} fieldValue Value to be validated
 * @param {string} fieldName Field name of where error happened
 * @throws {FormooseError} Throws Exception when invalid
 */
export function isArray(fieldValue: any, fieldName: string): boolean {
  if (!Array.isArray(fieldValue)) {
    ErrorHandler.throw(
      `Array expected, type sent: ${typeof fieldValue} - on field: ${fieldName}`,
      fieldName,
      ErrorCodes['is-not-an-array'],
      { fieldName, fieldValue }
    );
  }
  return true;
}
