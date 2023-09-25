import { getModel,  } from '../getModel';
import { cleanError } from '../cleanError';
import { setError } from '../setError';
import { Validate } from '@/core';
import { ISchema, FormState, StateSetter } from '@/interfaces';

/**
 * Method to validate only one field and set related errors and messages
 * @param {string} field
 * @param {ISchema} schema
 * @param {FormState} formData
 * @param {StateSetter} stateSetter
 * @param t
 * @returns {*}
 */
const validateOneField = (
  field: string,
  schema: ISchema,
  formData: FormState,
  stateSetter: StateSetter<FormState>,
  t: (any)
) => {
  return new Promise(resolve => {
    Validate(
      getModel(formData, field),
      [field],
      schema
    )
      .then(() => {
        cleanError(stateSetter, field);
        resolve(true);
      })

      .catch(error => {
        setError(stateSetter, field, error, t);
        resolve(false);
      });
  });
};


export default validateOneField;




