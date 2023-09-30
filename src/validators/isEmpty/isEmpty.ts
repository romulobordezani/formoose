import { ErrorCodes, ErrorHandler } from '@/custom-errors';

/**
 * @category Validators
 * @param {string} fieldValue Value to be validated
 * @param {string} fieldName Form Field where error happened
 * @throws {FormooseError} Throws Exception when invalid
 * @returns {boolean}
 */
export function isEmpty(fieldValue: any, fieldName: string): boolean {
  if (fieldValue === undefined || fieldValue === null || fieldValue === '' || fieldValue.length < 1) {
    ErrorHandler.throw(
      `Required field "${fieldName}" is empty, sent type '${typeof fieldValue}' with value: '${fieldValue}' - on field: ${fieldName}`,
      fieldName,
      ErrorCodes['is-empty'],
      { fieldName, fieldValue }
    );
  }
  return true;
}
