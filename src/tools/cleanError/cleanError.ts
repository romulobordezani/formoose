import { FormState, IStateSetter } from '@/interfaces';

/**
 * Shared Method to Clean Errors in a specific Field of a Data Form integrated with domains
 * @category Utils
 * @alias validate/cleanError
 * @param {IStateSetter} stateSetter
 * @param {string} field
 */
export function cleanError(stateSetter: IStateSetter<FormState>, field: string) {
  stateSetter(state => ({
    ...state,
    [field]: {
      ...state[field],
      error: null,
      message: null
    }
  }));
}
