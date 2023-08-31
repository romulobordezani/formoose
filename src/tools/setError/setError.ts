/**
 * Shared Method to Set an error in a specific Field
 * @category Utils
 * @alias validate/setError
 * @param {IStateSetter} stateSetter
 * @param {string} field - The field to set the error
 * @param error - <ICustomError> The error object coming from Validators
 * @param {(any)} translation i18n t function
 */
import { IStateSetter, ICustomError } from '@/interfaces';

function setError(stateSetter: IStateSetter, field: string, error: ICustomError, translation: (any)) {
  stateSetter(state => ({
    ...state,
    [field]: {
      ...state[field],
      error: true,
      message: translation(error.translatedMessageId, error.translatedMessageLocals)
    }
  }));
}

export default setError;
