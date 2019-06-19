import { matchValidate } from '../../validators';

/**
 * Custom Index
 * @category Validators
 * @param {checkerData} checkerData
 */
const CustomValidate = checkerData => {
  const { value, propsOnSchema = {}, propName } = checkerData;
  const { validate } = propsOnSchema;
  if (validate) {
    matchValidate(value, validate, propName);
  }
};

export default CustomValidate;
