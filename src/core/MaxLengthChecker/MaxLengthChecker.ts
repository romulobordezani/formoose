import { maxLength } from '../../validators';

/**
 * Checks if the value exceeds the Maximum length set on schema
 * @category Validators
 * @param {checkerData} checkerData
 */
const MaxLengthChecker = checkerData => {
  const { value, propsOnSchema = {}, propName } = checkerData;
  if (propsOnSchema.max) {
    maxLength(value, propsOnSchema.max, propName);
  }
};

export default MaxLengthChecker;
