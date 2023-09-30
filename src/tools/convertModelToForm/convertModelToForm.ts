import { FormState, PayloadFormat } from 'src/models';

/**
 * Tranform a simple object, usually passed in json requests, in a form object
 * @category Tools
 * @alias tools/updateFormDataValues
 * @param formData All fields state from component
 * @param {PayloadFormat} model User Model Abstraction
 * @returns {FormState}
 */
function convertModelToForm(model: PayloadFormat): FormState {
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
