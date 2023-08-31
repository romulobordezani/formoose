import { IStateSetter } from '@/interfaces';

/**
 * Shared Method to Clean Errors in a specific Field of a Data Form integrated with domains
 * @category Utils
 * @alias validate/cleanError
 * @param {IStateSetter} stateSetter
 * @param {string} field
 */
function cleanError(stateSetter: IStateSetter, field: string) {
  stateSetter(state => ({
    ...state,
    [field]: {
      ...state[field],
      error: null,
      message: null
    }
  }));
}

export default cleanError;
