import { matchValidate } from '../../validators';

/**
 * Custom Index
 * @category Validators
 * @param {checkerData} checkerData
 */
export const CustomValidate = checkerData => {
  const { value, propsOnSchema = {}, propName } = checkerData;
  const { validate } = propsOnSchema;
  if (validate) {
    matchValidate(value, validate.callback, propName, validate.message);
  }
};

