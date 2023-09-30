import { ErrorCodes, ErrorHandler } from '@/custom-errors';
import { isString } from '../isString';

/**
 * @category Validators
 * @param {any} fieldValue Value to be validated
 * @param {string} fieldName Form Field where error happened
 * @param {number} size Length quantifier to be used on validation
 * @throws {FormooseError} Throws Exception when invalid
 * @returns {boolean}
 */
export function minLength(fieldValue: any, size: number, fieldName: string): boolean {
  const stringHelper = String(fieldValue);

  if (isString(fieldValue, fieldName) && stringHelper.length < size) {
    ErrorHandler.throw(
      `String with length of ${stringHelper.length}, expected at least ${size} characters - on field: ${fieldName}`,
      fieldName,
      ErrorCodes['chars-lenght-is-too-short'],
      { fieldValue, size, length: fieldValue.length, fieldName }
    );
  }

  return true;
}
