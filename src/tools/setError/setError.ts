/**
 * Shared Method to Set an error in a specific Field
 * @category Utils
 * @alias validate/setError
 * @param {StateSetter} stateSetter
 * @param {string} field - The field to set the error
 * @param error - <ICustomError> The error object coming from Validators
 * @param {(any)} translation i18n t function
 */
import { ICustomError, FormState, StateSetter } from '@/interfaces';

export function setError(
  stateSetter: StateSetter<FormState>,
  field: string,
  error: ICustomError,
  translation: any
) {
  stateSetter((state: FormState) => ({
    ...state,
    [field]: {
      ...state[field],
      error,
      message: translation(
        error?.translatedMessageId,
        error?.translatedMessageLocals
      )
    }
  }));
}
