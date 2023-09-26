import { ErrorHandler } from '@/custom-errors';

/**
 * @category Validators
 * @param {string} value Value to be validated
 * @param {string} identifier Form Field where error happened
 * @param {function} validate Custom Validator method
 * @throws {CustomError} Throws Exception when invalid
 * @returns {boolean}
 */
export function matchValidate(
  value,
  validate,
  identifier,
  message: string = 'error00002'
) {
  if (!validate(value)) {
    ErrorHandler.throw(
      `Value not passed Custom Validation ${validate.name} - on field: ${identifier}`,
      identifier,
      message
    );
  }
  return true;
}
