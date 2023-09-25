/**
 * Shared Method  to change the value of a specific Field
 * @category Tools
 * @alias tools/setValue
 * @param {IStateSetter} stateSetter
 * @param {string} field - The field to be validated
 * @param value
 */
import { FormState, IStateSetter } from '@/interfaces';

export function setValue(
  stateSetter: IStateSetter<FormState>,
  field: string,
  value: string | number | Record<string, any>
) {
  stateSetter((formState) => {
    return {
      ...formState,
      [field]: {
        ...formState[field],
        value
      }
    }
  });
}