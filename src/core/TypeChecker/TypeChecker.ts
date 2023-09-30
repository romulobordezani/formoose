import { SupportedTypesEnum } from '@/models';
import { isString, isNumber, isBoolean, isArray } from '@/validators';
import { DataChecker } from 'src/models/DataChecker';

export const getTypeValidator = (primitiveTypeName: SupportedTypesEnum) => {
  const types = {
    Array: isArray,
    Boolean: isBoolean,
    Number: isNumber,
    String: isString,
    default: () => null
  };

  return types[primitiveTypeName] || types.default;
};

/**
 * @description Checks if type is supported
 * @category Validators
 */
export const TypeChecker = (dataChecker: DataChecker) => {
  const { fieldValue, schemaItem, fieldName } = dataChecker;

  getTypeValidator(schemaItem.type)(fieldValue, fieldName);
};
