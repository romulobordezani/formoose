import { ErrorHandler } from '../../core';

/**
 * @category Validators
 * @param {string} value Value to be validated
 * @param {string} identifier Form Field where error happened
 * @throws {CustomError} Throws Exception when invalid
 * @returns {boolean}
 */
function isBoolean(value, identifier) {
  if (typeof value !== 'boolean') {
    ErrorHandler.throw(
      `Expected type boolean, sent '${typeof value}' - on field: ${identifier}`,
      identifier,
      'error00003'
    );
  }
  return true;
}

export default isBoolean;
