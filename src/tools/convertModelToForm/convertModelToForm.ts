import { IModel } from '@/interfaces';

/**
 * Tranform a simple object, usually passed in json requests, in a form object
 * @category Utils
 * @alias validate/updateFormDataValues
 * @param formData All fields state from component
 * @param {IModel} model User Model Abstraction
 * @returns {IFormData}
 */
function convertModelToForm(
  model: IModel
) {
  const objectAdapter = {};

  Object.keys(model).map(key => {
    objectAdapter[key] = {
      error: null,
      message: null,
      value: model[key]
    };
  });

  return objectAdapter;
}

export default convertModelToForm;
