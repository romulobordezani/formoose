import { DataChecker } from 'src/models/DataChecker';
import { matchEnum } from '../../validators';

/**
 * @description Checks if the value is one of the possible values listed on Enum
 * @category Validators
 * @throws FormooseError
 */
export const EnumChecker = (dataChecker: DataChecker) => {
  const { fieldValue, schemaItem, fieldName } = dataChecker;

  if (schemaItem?.enum) {
    matchEnum(fieldValue, schemaItem.enum, fieldName);
  }
};
