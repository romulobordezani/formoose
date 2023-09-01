import { ErrorHandler } from '@/core/ErrorHandler';

/**
 * @category Validators
 * @param {string} value Value to be validated
 * @param {string} identifier Form Field where error happened
 * @throws {CustomError} Throws Exception when invalid
 * @returns {boolean}
 */
export function isArray(value, identifier) {
  if (!Array.isArray(value)) {
    ErrorHandler.throw(
      `Array expected, type sent: ${typeof value} - on field: ${identifier}`,
      identifier,
      'error00009'
    );
  }
  return true;
}

