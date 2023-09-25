import { FormState, IModel } from "../../interfaces";

/**
 * Updates all form data based on an User
 * @category Utils
 * @alias validate/updateFormDataValues
 * @param formData All fields state from component
 * @param {IModel} model User Model Abstraction
 * @returns {void}
 */
function updateFormDataValues(
  formData: FormState,
  model: IModel
) {
  const objectAdapter = {};

  Object.keys(model).map(key => {
    objectAdapter[key] = { value: model[key] };
  });

  Object.assign(formData, objectAdapter);
}

export default updateFormDataValues;
