import { FormState, StateSetter } from 'src/models';

/**
 * Shared Method to Set a message in a specific Field
 * @category Tools
 * @alias tools/setMessage
 * @param {stateSetter} stateSetter
 * @param {string} field - The field to set the error
 * @param {string} message
 */
function setMessage(stateSetter: StateSetter<FormState>, field: string, message: string) {
  stateSetter((state) => ({
    ...state,
    [field]: {
      ...state[field],
      message
    }
  }));
}

export default setMessage;
