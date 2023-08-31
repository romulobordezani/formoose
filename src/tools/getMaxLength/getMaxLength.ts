import { IFormData, ISchema } from '@/interfaces';

/**
 * A tool to get MaxLength info from a schema
 * @category Utils
 * @alias validate/getMaxLength
 * @param formData
 * @param field
 * @param schema
 * @returns {Object} - Simulation of model
 */
function getMaxLength(formData: IFormData, field: string, schema: ISchema) {
  return schema[field].max;
}

export default getMaxLength;
