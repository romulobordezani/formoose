import { Schema } from 'src/models';

/**
 * @category Tools
 */
function getMaxLength(fieldName: string, schema: Schema) {
  return schema[fieldName]?.max;
}

export default getMaxLength;
