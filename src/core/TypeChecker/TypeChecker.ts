import { isString, isNumber, isBoolean, isArray } from '../../validators';

/**
 * Object
 * @ignore
 * @param primitiveTypeName
 * @returns {*|types.default|Former}
 */
const getTypeValidator = primitiveTypeName => {
  const types = {
    String: isString,
    Number: isNumber,
    Boolean: isBoolean,
    Array: isArray,
    default: () => {}
  };
  return types[primitiveTypeName] || types.default;
};

/**
 * Checks if value's type matches schema
 * @category Validators
 * @param {checkerData} checkerData
 */
const TypeChecker = checkerData => {
  const { value, propsOnSchema, propName } = checkerData;
  getTypeValidator(propsOnSchema.type.name)(value, propName);
};

export default TypeChecker;
