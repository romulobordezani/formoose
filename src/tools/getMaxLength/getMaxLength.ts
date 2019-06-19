import Formoose from '../index';

/**
 * A tool to get MaxLength info from a schema
 * @category Utils
 * @alias validate/getMaxLength
 * @param formData
 * @param field
 * @param schema
 * @returns {Object} - Simulation of model <User> with only needed fields
 */
function getMaxLength(formData, field, schema) {
  return schema(Formoose.getSimpleObject(formData), schema(formData))[field].max;
}

export default getMaxLength;
