import {
  CustomValidate,
  EnumChecker,
  MaxLengthChecker,
  MinLengthChecker,
  RequiredChecker,
  TypeChecker
} from '..';

/**
 * Ensure Schema Validation - Runs all validations needed to ensure the whole schema
 * @category Validators
 * @param {checkerData} checkerData
 * @returns {boolean|null|CustomError}
 */
const EnsureSchema = checkerData => {
  const { required } = checkerData.propsOnSchema;
  const { value } = checkerData;
  const validationNotNeeded = !required && (value === undefined || value === '' || value === null);

  if (validationNotNeeded) {
    return null;
  }

  // Trows an error if value's type and Schema's type doesn't matches
  TypeChecker(checkerData);

  // Trows an error if Required Prop is Empty
  RequiredChecker(checkerData);

  // Trows an error if value doesn't have minimum Length
  MinLengthChecker(checkerData);

  // Trows an error if value exceeds maximum Length
  MaxLengthChecker(checkerData);

  // Trows an error if value doesn't matches Schema Regex
  CustomValidate(checkerData);

  // Trows an error if value doesn't matches Enumerable
  EnumChecker(checkerData);

  return true;
};

export default EnsureSchema;
