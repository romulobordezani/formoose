import { ErrorHandler } from '../core';

/**
 * @category Validators
 * @param {string} value Value to be validated
 * @param {string} identifier Form Field where error happened
 * @param {function} validate Custom Validator method
 * @throws {CustomError} Throws Exception when invalid
 * @returns {boolean}
 */
function matchValidate(value, validate, identifier) {
  if (!validate(value)) {
    ErrorHandler.throw(
      `Value not passed Custom Validation ${validate.name} - on field: ${identifier}`,
      identifier,
      'error00002'
    );
  }
  return true;
}

export default matchValidate;
