import { ErrorHandler } from '../../core';

/**
 * @category Validators
 * @param {string} value Value to be validated
 * @param {string} identifier Form Field where error happened
 * @throws {CustomError} Throws Exception when invalid
 * @returns {boolean}
 */
function isEmpty(value, identifier) {
  if (value === undefined || value === null || value === '' || value.length < 1) {
    ErrorHandler.throw(
      `Required field "${identifier}" is empty, sent type '${typeof value}' with value: '${value}' - on field: ${identifier}`,
      identifier,
      'error00004'
    );
  }
  return true;
}

export default isEmpty;
