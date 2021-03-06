import FormooseTools from '../index';
import { Validate } from '../../core';
import { ISchema, IFormData, IStateSetter } from '../../interfaces';

/**
 * Method to validate only one field and set related errors and messages
 * @param {string} field
 * @param {ISchema} schema
 * @param {IFormData} formData
 * @param {IStateSetter} stateSetter
 * @param t
 * @returns {*}
 */
const validateOneField = (
  field: string,
  schema: ISchema,
  formData: IFormData,
  stateSetter: IStateSetter,
  t: (any)
) => {
  return new Promise(resolve => {
    Validate(
      FormooseTools.getModel(formData, field),
      [field],
      schema
    )
      .then(() => {
        FormooseTools.cleanError(stateSetter, field);
        resolve(true);
      })

      .catch(error => {
        FormooseTools.setError(stateSetter, field, error, t);
        resolve(false);
      });
  });
};


export default validateOneField;




