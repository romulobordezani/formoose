import Formoose from '../index';

/**
 * Shared Method To validateAllFieldsSync Fields in a Form, returning if all them are valid or not
 * @category Utils
 * @alias validate/validateAll
 * @param validator
 * @param formData - All fields state from component
 * @param {stateSetter} setFormData
 * @param {function} t i18n get translation method
 * @param isStateAndCityRequired
 * @param {string} validatorName - The name of the validation engine to be used
 * @returns {Promise<any>}
 */
function validateAllFieldsSync(
  validator,
  formData,
  setFormData,
  t,
  isStateAndCityRequired = true,
  validatorName
) {
  return new Promise(resolve => {
    const fakeFormData = Object.assign({}, formData);

    const fakeSetFormData = fakeState => {
      Object.assign(fakeFormData, fakeState(fakeFormData));
      return fakeFormData;
    };

    const promiseList = Object.keys(formData).map(field =>
      validator(
        Formoose.getModel(formData, field),
        [field]
      )
        .then(() => {
          Formoose.cleanError(fakeSetFormData, field);
        })
        .catch(error => {
          Formoose.setError(fakeSetFormData, field, error, t);
          throw error;
        })
    );

    Promise.all(promiseList)
      .then(() => {
        setFormData(fakeFormData);
        resolve(true);
      })
      .catch(() => {
        setFormData(fakeFormData);
        resolve(false);
      });
  });
}

export default validateAllFieldsSync;
