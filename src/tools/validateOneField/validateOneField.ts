import FormooseTools from '../index';
import { Validate } from '../../core';
import { ISchema, IFormData } from '../../interfaces';

/**
 * Method to validate only one field and set related errors and messages
 * @param {string} field
 * @param {ISchema} schema
 * @param {IFormData} formData
 * @param {stateSetter} setFormData
 * @param t
 * @returns {*}
 */
const validateOneField = (
  field: string,
  schema: ISchema,
  formData: IFormData,
  setFormData,
  t
) => {
  return new Promise(resolve => {
    Validate(
      FormooseTools.getModel(formData, field),
      [field],
      schema
    )
      .then(() => {
        FormooseTools.cleanError(setFormData, field);
        resolve(true);
      })

      .catch(error => {
        FormooseTools.setError(setFormData, field, error, t);
        resolve(false);
      });
  });
};


export default validateOneField;




