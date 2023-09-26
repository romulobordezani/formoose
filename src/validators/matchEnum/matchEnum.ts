import { ErrorHandler } from '@/custom-errors';

/**
 * @category Validators
 * @param {string} value Value to be validated
 * @param {string} identifier Form Field where error happened
 * @param {enum} enumObject Enumerable with possible values
 * @throws {CustomError} Throws Exception when invalid
 * @returns {boolean}
 */
export function matchEnum(value, enumObject, identifier) {
  const existsInEnum = Object.values(enumObject).indexOf(value) > -1;

  if (!existsInEnum) {
    ErrorHandler.throw(
      `The value '${value}' isn't listed in the possible enumerable list '${JSON.stringify(
        enumObject
      )}' - on field: ${identifier}`,
      identifier,
      'error00006'
    );
  }
  return true;
}
