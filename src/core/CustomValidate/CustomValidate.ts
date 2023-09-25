import { ICheckerData } from 'src/interfaces/IChekerData';
import { matchValidate } from '../../validators';

/**
 * Custom Validate
 * @category Validators
 * @param {ICheckerData} checkerData
 */

// TODO - STOPED HERE => Adding tests and making it work
export const CustomValidate = (checkerData: ICheckerData) => {
  const { value, propsOnSchema, propName } = checkerData;
  const { validate } = propsOnSchema[propName];

  if (validate) {
    matchValidate(value, validate.callback, propName, validate.message);
  }
};
