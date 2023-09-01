import { matchEnum } from '../../validators';

/**
 * Enum Checker - Checks if the value is one of the possible values listed on Enum
 * @category Validators
 * @param {checkerData} checkerData
 */
export const EnumChecker = checkerData => {
  const { value, propsOnSchema = {}, propName } = checkerData;
  if (propsOnSchema.enum) {
    matchEnum(value, propsOnSchema.enum, propName);
  }
};


