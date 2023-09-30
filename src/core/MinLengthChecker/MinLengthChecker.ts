import { DataChecker } from '@/models';
import { minLength } from '../../validators';

/**
 * @description Checks if the value has the minimum length set on schema
 * @category Validators
 * @param {DataChecker} dataChecker
 */
export const MinLengthChecker = (dataChecker: DataChecker) => {
  const { fieldValue, schemaItem, fieldName } = dataChecker;

  if (schemaItem?.min) {
    minLength(fieldValue, schemaItem.min, fieldName);
  }
};
