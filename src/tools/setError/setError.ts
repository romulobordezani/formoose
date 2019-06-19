/**
 * Shared Method to Set an error in a specific Field
 * @category Utils
 * @alias validate/setError
 * @param {stateSetter} stateSetter
 * @param {string} field - The field to set the error
 * @param error - <CustomError> The error object coming from Validators
 * @param translation i18n context
 */
function setError(stateSetter, field, error, translation) {
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
