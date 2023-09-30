import { DataChecker } from 'src/models/DataChecker';
import { matchValidate } from '../../validators';

/**
 * @category Validators
 * @throws FormooseError
 */
export const CustomValidate = (dataChecker: DataChecker) => {
  const { fieldValue, schemaItem, fieldName } = dataChecker;

  if (schemaItem?.validate) {
    matchValidate(fieldValue, schemaItem, fieldName);
  }
};
