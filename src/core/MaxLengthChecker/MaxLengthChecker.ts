import { DataChecker } from 'src/models/DataChecker';
import { maxLength } from '../../validators';

/**
 * @description Checks if the value exceeds the Maximum length set on schema
 * @category Validators
 */
export const MaxLengthChecker = (dataChecker: DataChecker) => {
  const { fieldValue, schemaItem, fieldName } = dataChecker;

  if (schemaItem?.max) {
    maxLength(fieldValue, schemaItem.max, fieldName);
  }
};
