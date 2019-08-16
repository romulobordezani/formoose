import FormooseTools from '../index';
import { Validate } from '../../core';

/**
 * Shared Method To validateAllFieldsSync Fields in a Form, returning if all them are valid or not
 * @category Utils
 * @alias validate/validateAll
 * @param schema
 * @param formData - All fields state from component
 * @param {Function} setFormData
 * @param {function} t i18n get translation method
 * @returns {Promise<any>}
 */
function validateAllFieldsSync(
  schema,
  formData,
  setFormData,
  t
) {
  return new Promise(resolve => {
    const fakeFormData = Object.assign({}, formData);

    const fakeSetFormData = fakeState => {
      Object.assign(fakeFormData, fakeState(fakeFormData));
      return fakeFormData;
    };

    const promiseList = Object.keys(formData).map(field =>
      Validate(
        FormooseTools.getModel(formData, field),
        [field],
        schema
      )
        .then(() => {
          FormooseTools.cleanError(fakeSetFormData, field);
        })
        .catch(error => {
          FormooseTools.setError(fakeSetFormData, field, error, t);
          throw error;
        })
    );

    Promise.all(promiseList)
      .then(() => {
        setFormData(fakeFormData);
        resolve(true);
      })
      .catch(e => {
        setFormData(fakeFormData);
        resolve(false);
      });
  });
}

export default validateAllFieldsSync;
