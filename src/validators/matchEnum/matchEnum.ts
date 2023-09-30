import { ErrorCodes, ErrorHandler } from '@/custom-errors';

/**
 * @category Validators
 * @param {string} fieldValue Value to be validated
 * @param {string} fieldName Form Field where error happened
 * @param {enum} enumObject Enumerable with possible values
 * @throws {FormooseError} Throws Exception when invalid
 * @returns {boolean}
 */
export function matchEnum(fieldValue: string, enumObject: Record<string, string>, fieldName: string): boolean {
  const existsInEnum = Object.values(enumObject).indexOf(fieldValue) > -1;

  if (!existsInEnum) {
    ErrorHandler.throw(
      `The value '${fieldValue}' isn't listed in the possible enumerable list '${JSON.stringify(
        enumObject
      )}' - on field: ${fieldName}`,
      fieldName,
      ErrorCodes['does-not-match-enum'],
      { fieldName, fieldValue }
    );
  }

  return true;
}
