import { ErrorHandler } from '@/core';

/**
 * @category Validators
 * @param {string} value Value to be validated
 * @param {string} identifier Form Field where error happened
 * @throws {CustomError} Throws Exception when invalid
 * @returns {boolean}
 */
function isNumber(value, identifier) {
  if (typeof value !== 'number') {
    ErrorHandler.throw(
      `Number expected, type sent: ${typeof value} - on field: ${identifier}`,
      identifier,
      'error00005'
    );
  }
  return true;
}

export default isNumber;
