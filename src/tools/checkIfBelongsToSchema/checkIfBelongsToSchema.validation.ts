import { Schema } from 'src/models';
import { ErrorHandler } from '../../custom-errors/ErrorHandler';

/**
 * checkIfBelongsToSchema
 * @category Tools
 * @param {string[]} props Properties to check existence on Schema
 * @param {Schema} schema
 * @throws {FormooseError} When a property is not found on Schema
 * @returns {boolean}
 */
export const checkIfBelongsToSchema = (props: string[], schema: Schema): boolean => {
  let errorFound = '';

  props.map((propToCheck) => {
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
