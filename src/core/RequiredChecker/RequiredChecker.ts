import { DataChecker } from '@/models';
import { isEmpty } from '@/validators';

/**
 * @description  Checks if required value is fulfilled
 * @category Validators
 */
export const RequiredChecker = (dataChecker: DataChecker) => {
  const { fieldValue, schemaItem, fieldName } = dataChecker;

  if (schemaItem?.required) {
    isEmpty(fieldValue, fieldName);
  }
};
