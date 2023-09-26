import { getModel } from '../getModel';
import { cleanError } from '../cleanError';
import { setError } from '../setError';

import { Validate } from '@/core';
import { ISchema, FormState, StateSetter } from '../../interfaces';

/**
 * Shared Method To validateAllFieldsSync Fields in a Form, returning if all them are valid or not
 * @category Utils
 * @alias validate/validateAll
 * @param schema
 * @param formData - All fields state from component
 * @param {Function} stateSetter
 * @param {function} t i18n get translation method
 * @returns {Promise<any>}
 */
function validateAllFieldsSync(
  schema: ISchema,
  formData: FormState,
  stateSetter: StateSetter<FormState>,
  t: any
) {
  return new Promise((resolve, reject) => {
    const fakeFormData = Object.assign({}, formData);

    const fakeSetFormData = (fakeState) => {
      Object.assign(fakeFormData, fakeState(fakeFormData));
      return fakeFormData;
    };

    const promiseList = Object.keys(formData).map((field) =>
      Validate(getModel(formData, field), [field], schema)
        .then(() => {
          cleanError(fakeSetFormData, field);
        })
        .catch((error) => {
          setError(fakeSetFormData, field, error, t);
          throw error;
        })
    );

    Promise.all(promiseList)
      .then(() => {
        stateSetter(fakeFormData);
        resolve(true);
      })
      .catch((e) => {
        console.error(e);
        stateSetter(fakeFormData);
        reject({
          formData: fakeFormData,
          message: 'Invalid Form',
          result: false
        });
      });
  });
}

export default validateAllFieldsSync;
