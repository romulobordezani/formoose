import { EnsureSchema } from '../EnsureSchema';
import { checkIfBelongsToSchema } from '../../tools/checkIfBelongsToSchema';
import { Schema } from 'src/models';

/**
 * Main validator method, returns a Promise that throws an error
 * when something is invalid according to schema set up, or true when all validations are fine.
 * @category Validators
 * @param {Object} model the object that represents the model, with key and values to be validated e.g. { name: 'Emmanuel' }
 * @param {string[]} fieldNames list of fields to be validated
 * @param {Schema} schema The Mongoose like schema containing all validations
 * @throws {FormooseError} FormooseError
 */
export const Validate = (model: any, fieldNames: string[], schema: Schema) =>
  new Promise((resolve) => {
    checkIfBelongsToSchema(fieldNames, schema);

    for (let i = 0; i < fieldNames.length; i++) {
      EnsureSchema({
        fieldName: fieldNames[i],
        schemaItem: schema[fieldNames[i]],
        fieldValue: model[fieldNames[i]]
      });
    }

    resolve(true);
  });
