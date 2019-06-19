/**
 * A Toll to extract a user to be used at API, without errors, messages and with the values at first object level
 * @param formData All fields state from component
 */
function getSimpleObject(formData, filter) {
  const objectAdapter = {};
  Object.keys(formData).map(field => {
    if (formData[field].value !== '' && formData[field].value !== undefined) {
      objectAdapter[field] = formData[field].value;
    }
    return null;
  });
  return objectAdapter;
}

export default getSimpleObject;
