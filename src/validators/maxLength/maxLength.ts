import { ErrorCodes, ErrorHandler } from '@/custom-errors';
import { isString } from '../isString';

/**
 * @category Validators
 * @param {string} fieldValue Value to be validated
 * @param {string} fieldName Form Field where error happened
 * @param {number} size Length quantifier to be used on validation
 * @throws {FormooseError} Throws Exception when invalid
 * @returns {boolean}
 */
export function maxLength(fieldValue: any, size: number, fieldName: string): boolean {
  const stringHelper = String(fieldValue);

  if (isString(fieldValue, fieldName) && stringHelper.length > size) {
    ErrorHandler.throw(
      `String exceed the size of ${size} characters with ${stringHelper.length} - on field: ${fieldName}`,
      fieldName,
      ErrorCodes['chars-limit-exceeded'],
      { fieldValue, size, length: fieldValue.length, fieldName }
    );
  }

  return true;
}
