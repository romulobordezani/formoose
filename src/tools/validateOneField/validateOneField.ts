import { getModel } from '../getModel';
import { cleanError } from '../cleanError';
import { setError } from '../setError';
import { Validate } from '@/core';
import { Schema, FormState, StateSetter, FormooseTFunction } from '@/models';

/**
 * Method to validate only one field and set related errors and messages
 * @param {string} fieldName
 * @param {Schema} schema
 * @param {FormState} formData
 * @param {StateSetter} stateSetter
 * @param {FormooseTFunction} t
 * @returns {*}
 */
const validateOneField = (
  fieldName: string,
  schema: Schema,
  formData: FormState,
  stateSetter: StateSetter<FormState>,
  t: FormooseTFunction
): Promise<boolean> => {
  return new Promise((resolve) => {
    Validate(getModel(formData, fieldName), [fieldName], schema)
      .then(() => {
        cleanError(stateSetter, fieldName);
        resolve(true);
      })
      .catch((error) => {
        console.error(error);
        setError(stateSetter, fieldName, error, t);
        resolve(false);
      });
  });
};

export default validateOneField;
