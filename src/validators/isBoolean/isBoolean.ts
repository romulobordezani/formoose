import { ErrorCodes, ErrorHandler } from '@/custom-errors';

/**
 * @category Validators
 * @param {string} fieldValue Value to be validated
 * @param {string} fieldName Form Field where error happened
 * @throws {FormooseError} Throws Exception when invalid
 */
export function isBoolean(fieldValue: any, fieldName: string): boolean {
  if (typeof fieldValue !== 'boolean') {
    ErrorHandler.throw(
      `Expected type boolean, sent '${typeof fieldValue}' - on field: ${fieldName}`,
      fieldName,
      ErrorCodes['is-not-a-boolean'],
      { fieldName, fieldValue }
    );
  }

  return true;
}
