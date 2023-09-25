import { FormState} from '@/interfaces';

/**
 * Usually an IFormData contains complex objects to each field, with error, value and message
 * This method returns a simpler object, with keys and values only
 * @param {FormState} formData
 * @param {string[]} fieldsToSkip The list of field to remove from result
 * @param {boolean} getEmptyValuesToo returns empty fields too
 */
function getSimpleObject(
  formData: FormState,
  fieldsToSkip: string[]|null = null,
  getEmptyValuesToo: boolean = false
) {
  const objectAdapter = {};
  const allFieldNames = Object.keys(formData);

  allFieldNames.map((fieldName: string) => {
    const fieldHasAnyValue = (formData[fieldName].value !== '' && formData[fieldName].value !== undefined);
    if (getEmptyValuesToo || fieldHasAnyValue) {
      objectAdapter[fieldName] = formData[fieldName].value;
    }
  });

  if (fieldsToSkip) {
    fieldsToSkip.forEach((fieldName: string) => {
      delete objectAdapter[fieldName];
    });
  }

  return objectAdapter;
}

export default getSimpleObject;
