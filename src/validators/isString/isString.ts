import { ErrorHandler } from '@/core';

/**
 * @category Validators
 * @param {string} value Value to be validated
 * @param {string} identifier Form Field where error happened
 * @throws {CustomError} Throws Exception when invalid
 * @returns {boolean}
 */
function isString(value, identifier) {
  if (typeof value !== 'string') {
    ErrorHandler.throw(
      `String expected, type sent: ${typeof value} - on field: ${identifier}`,
      identifier,
      'error00001'
    );
  }
  return true;
}

export default isString;
