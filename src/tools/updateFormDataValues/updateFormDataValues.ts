import { FormState, PayloadFormat } from '../../models';
import { assign } from 'lodash';

/**
 * Updates all form data based on an User
 * @category Tools
 * @alias tools/updateFormDataValues
 * @param formData All fields state from component
 * @param {PayloadFormat} model User Model Abstraction
 * @returns {void}
 */
function updateFormDataValues(formData: FormState, model: PayloadFormat) {
  const objectAdapter = {};

  Object.keys(model).map((key) => {
    objectAdapter[key] = { value: model[key] };
  });

  assign(formData, objectAdapter);
}

export default updateFormDataValues;
