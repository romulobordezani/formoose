import { ErrorHandler } from '@/custom-errors';
import { isString } from '../isString';

/**
 * @category Validators
 * @param {string} value Value to be validated
 * @param {string} identifier Form Field where error happened
 * @param {number} size Length quantifier to be used on validation
 * @throws {CustomError} Throws Exception when invalid
 * @returns {boolean}
 */
export function maxLength(value: any, size: number, identifier: string) {
  const stringHelper = String(value);
  
  if (isString(value, identifier) && stringHelper.length > size) {
    ErrorHandler.throw(
      `String exceed the size of ${size} characters with ${
        stringHelper.length
      } - on field: ${identifier}`,
      identifier,
      'error00007',
      { value, size, length: value.length }
    );
  }
  return true;
}


