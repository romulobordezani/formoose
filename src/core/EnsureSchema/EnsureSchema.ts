import { CustomError } from '@/custom-errors';
import { CustomValidate } from '../CustomValidate';
import { EnumChecker } from '../EnumChecker';
import { MaxLengthChecker } from '../MaxLengthChecker';
import { MinLengthChecker } from '../MinLengthChecker';
import { RequiredChecker } from '../RequiredChecker';
import { TypeChecker } from '../TypeChecker';
import { ICheckerData } from 'src/interfaces/IChekerData';

/**
 * Ensure Schema Validation - Runs all validations needed to ensure the whole schema
 * @category Validators
 * @param {ICheckerData} checkerData
 * @returns {boolean|null|CustomError}
 */
export const EnsureSchema = (checkerData: ICheckerData): boolean | null | CustomError => {
  const { required } = checkerData.propsOnSchema;
  const { value } = checkerData;
  const validationNotNeeded = !required && (value === undefined || value === '' || value === null);

  if (validationNotNeeded) {
    return null;
  }

  for (const prop in checkerData.propsOnSchema) {
    if (Object.prototype.hasOwnProperty.call(checkerData?.propsOnSchema, prop)) {

      if (prop === 'type') {
        // Trows an error if value's type and Schema's type doesn't matches
        TypeChecker(checkerData);
      }

      if (prop === 'required') {
        // Trows an error if Required Prop is Empty
        RequiredChecker(checkerData);
      }

      if (prop === 'min') {
        // Trows an error if value doesn't have minimum Length
        MinLengthChecker(checkerData);
      }

      if (prop === 'max') {
        // Trows an error if value exceeds maximum Length
        MaxLengthChecker(checkerData);
      }

      if (prop === 'validate') {
        // Trows an error if value doesn't matches Schema Regex
        CustomValidate(checkerData);
      }

      if (prop === 'enum') {
        // Trows an error if value doesn't matches Enumerable
        EnumChecker(checkerData);
      }
    }
  }

  return true;
};

