import { IStateSetter } from '@/interfaces';

/**
 * Shared Method to Set a message in a specific Field
 * @category Utils
 * @alias validate/setMessage
 * @param {stateSetter} stateSetter
 * @param {string} field - The field to set the error
 * @param {string} message
 */
function setMessage(stateSetter: IStateSetter, field: string, message: string) {
  stateSetter(state => ({
    ...state,
    [field]: {
      ...state[field],
      message
    }
  }));
}

export default setMessage;
