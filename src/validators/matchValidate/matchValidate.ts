import { ErrorCodes, ErrorHandler } from '@/custom-errors';
import { SchemaItem } from '@/models';

/**
 * matchValidate
 * @category Validators
 * @param {any} fieldValue Field Value to be validated
 * @param {SchemaItem} schemaItem The field/item configuration over the Schema
 * @param {string} fieldName the name of the field being validated
 * @throws {FormooseError} Throws Exception when invalid
 * @returns {boolean}
 */
export function matchValidate(fieldValue: any, schemaItem: SchemaItem, fieldName: string): boolean {
  const { validate } = schemaItem;

  if (!validate?.validator(fieldValue)) {
    const defaultMessage = `Custom Validation failed on field: ${fieldName}`;

    ErrorHandler.throw(
      validate?.message || defaultMessage,
      fieldName,
      validate?.message || ErrorCodes['failed-custom-validate'],
      { fieldName, fieldValue }
    );
  }

  return true;
}
