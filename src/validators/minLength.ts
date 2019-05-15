import { ErrorHandler } from '../core';
import { isString } from '../validators';

/**
 * @category Validators
 * @param {string} value Value to be validated
 * @param {string} identifier Form Field where error happened
 * @param {number} size Length quantifier to be used on validation
 * @throws {CustomError} Throws Exception when invalid
 * @returns {boolean}
 */
function minLength(value, size, identifier) {
  const stringHelper = String(value);
  if (isString(value, identifier) && stringHelper.length < size) {
    ErrorHandler.throw(
      `String with length of ${
        stringHelper.length
      }, expected at least ${size} characters - on field: ${identifier}`,
      identifier,
      'error00008'
    );
  }
  return true;
}

export default minLength;
