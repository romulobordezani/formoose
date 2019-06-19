import Formoose from '../index';

/**
 * Method to validate only one field and set related errors and messages
 * @param {string} field
 * @param validator
 * @param formData
 * @param {stateSetter} setFormData
 * @param t
 * @returns {*}
 */
const validateOneField = (field, validator, formData, setFormData, t) =>
  validator(Formoose.getModel(formData, field), [field])
    .then(() => {
      Formoose.cleanError(setFormData, field);
    })
    .catch(error => {
      Formoose.setError(setFormData, field, error, t);
    });

export default validateOneField;
