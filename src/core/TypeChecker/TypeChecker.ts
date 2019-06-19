import { isString, isNumber, isBoolean, isArray } from '../../validators';

const getTypeValidator = primitiveTypeName => {
  const types = {
    Array: isArray,
    Boolean: isBoolean,
    Number: isNumber,
    String: isString,
    default: () => null
  };
  return types[primitiveTypeName] || types.default;
};

const TypeChecker = checkerData => {
  const { value, propsOnSchema, propName } = checkerData;
  getTypeValidator(propsOnSchema.type.name)(value, propName);
};

export default TypeChecker;
