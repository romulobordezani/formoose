import { getModel,  } from '../getModel';
import { cleanError } from '../cleanError';
import { setError } from '../setError';
import { Validate } from '@/core';
import { ISchema, FormState, IStateSetter } from '@/interfaces';

/**
 * Method to validate only one field and set related errors and messages
 * @param {string} field
 * @param {ISchema} schema
 * @param {FormState} formData
 * @param {IStateSetter} stateSetter
 * @param t
 * @returns {*}
 */
const validateOneField = (
  field: string,
  schema: ISchema,
  formData: FormState,
  stateSetter: IStateSetter<FormState>,
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




