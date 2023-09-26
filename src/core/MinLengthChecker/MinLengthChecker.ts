import { minLength } from '../../validators';

/**
 * Checks if the value has the minimum length set on schema
 * @category Validators
 * @param {checkerData} checkerData
 */
export const MinLengthChecker = (checkerData) => {
  const { value, propsOnSchema = {}, propName } = checkerData;
  if (propsOnSchema.min) {
    minLength(value, propsOnSchema.min, propName);
  }
};
