import { FormState, StateSetter } from 'src/models';

/**
 * Shared Method to Clean Errors in a specific Field of a Data Form integrated with domains
 * @category Tools
 * @alias tools/cleanError
 * @param {StateSetter} stateSetter
 * @param {string} field
 */
export function cleanError(stateSetter: StateSetter<FormState>, field: string) {
  stateSetter((state) => ({
    ...state,
    [field]: {
      ...state[field],
      error: null,
      message: null
    }
  }));
}
