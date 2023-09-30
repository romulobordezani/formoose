import { CustomValidate } from '../CustomValidate';
import { EnumChecker } from '../EnumChecker';
import { MaxLengthChecker } from '../MaxLengthChecker';
import { MinLengthChecker } from '../MinLengthChecker';
import { RequiredChecker } from '../RequiredChecker';
import { TypeChecker } from '../TypeChecker';
import { DataChecker } from 'src/models/DataChecker';

/**
 * @description Runs all validations needed to ensure the whole schema
 * @category Validators
 * @throws FormooseError
 * @returns {boolean}
 */
export const EnsureSchema = (dataChecker: DataChecker): boolean | null => {
  const { required } = dataChecker.schemaItem;
  const { fieldValue } = dataChecker;
  const validationNotNeeded = !required && (fieldValue === undefined || fieldValue === '' || fieldValue === null);

  if (validationNotNeeded) {
    return null;
  }

  for (const prop in dataChecker.schemaItem) {
    if (Object.prototype.hasOwnProperty.call(dataChecker?.schemaItem, prop)) {
      if (prop === 'type') {
        TypeChecker(dataChecker);
      }

      if (prop === 'required') {
        RequiredChecker(dataChecker);
      }

      if (prop === 'min') {
        MinLengthChecker(dataChecker);
      }

      if (prop === 'max') {
        MaxLengthChecker(dataChecker);
      }

      if (prop === 'validate') {
        CustomValidate(dataChecker);
      }

      if (prop === 'enum') {
        EnumChecker(dataChecker);
      }
    }
  }

  return true;
};
