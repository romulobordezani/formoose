import { ISchema } from '@/interfaces';
import { ErrorHandler } from '../../custom-errors/ErrorHandler';

/**
 * checkIfBelongsToSchema
 * @category Validators
 * @param {string[]} props Properties to check existance on Schema
 * @param {Schema} schema
 * @throws {CustomError} When a property is not found on Schema
 * @returns {boolean}
 */
export const checkIfBelongsToSchema = (props: string[], schema: ISchema): boolean => {
  let errorFound = '';

  props.map(propToCheck => {
    const doesNotHasPropertyOnSchema = !Object.prototype.hasOwnProperty.call(schema, propToCheck);

    if (doesNotHasPropertyOnSchema) {
      errorFound = `${propToCheck} not found on Schema.`;
    }

    return errorFound;
  });

  if (errorFound !== '') {
    ErrorHandler.throw(errorFound);
  }

  return errorFound === '';
};

