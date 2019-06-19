/**
 * A Toll to extract a user to be used at API, without empty required fields
 * @param {Object} formData All fields state from component
 * @param {Object} schema The MongooseSchema representation
 */

const listOfAcceptedEmpty = ['middleName', 'lastName'];

function getTrimmedObject(formData, schema) {
  const objectAdapter = {};
  Object.keys(formData).map(field => {
    const isAnOptionalField = !schema[field].required;
    if (formData[field].value !== '' && formData[field].value !== undefined) {
      objectAdapter[field] = formData[field].value;
    } else if (isAnOptionalField && listOfAcceptedEmpty.includes(field)) {
      objectAdapter[field] = formData[field].value;
    }
    return null;
  });
  return objectAdapter;
}

export default getTrimmedObject;
