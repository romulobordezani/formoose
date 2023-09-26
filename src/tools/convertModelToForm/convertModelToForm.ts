import { FormState, IModel } from '@/interfaces';

/**
 * Tranform a simple object, usually passed in json requests, in a form object
 * @category Utils
 * @alias validate/updateFormDataValues
 * @param formData All fields state from component
 * @param {IModel} model User Model Abstraction
 * @returns {FormState}
 */
function convertModelToForm(model: IModel): FormState {
  const objectAdapter: FormState = {};

  Object.keys(model).forEach((key: string) => {
    objectAdapter[key] = {
      error: null,
      message: null,
      value: model[key]
    };
  });

  return objectAdapter;
}

export default convertModelToForm;
