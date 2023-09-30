/**
 * Shared Method to Set an error in a specific Field
 * @category Tools
 * @param {StateSetter} stateSetter
 * @param {string} fieldName The field to set the error
 * @param {FormooseError} error The error object coming from Validators
 * @param {FormooseTFunction} translation i18n t function
 */
import { CustomError, FormState, StateSetter } from 'src/models';
import { FormooseTFunction } from 'src/models/I18nTypes';

export function setError(
  stateSetter: StateSetter<FormState>,
  fieldName: string,
  error: CustomError,
  t: FormooseTFunction
) {
  stateSetter((state: FormState) => ({
    ...state,
    [fieldName]: {
      ...state[fieldName],
      error,
      message: t(error?.translatedMessageKey, error?.translatedMessageInterpolators)
    }
  }));
}
