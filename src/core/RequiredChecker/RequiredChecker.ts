import { isEmpty } from '@/validators';

/**
 * Checks if required value is fulfilled
 * @category Validators
 * @param {checkerData} checkerData
 */
export const RequiredChecker = (checkerData) => {
  const { value, propsOnSchema = {}, propName } = checkerData;
  if (propsOnSchema.required) {
    isEmpty(value, propName);
  }
};
