/**
 * Shared Method  to change the value of a specific Field
 * @category Tools
 * @alias tools/setValue
 * @param {StateSetter} stateSetter
 * @param {string} field - The field to be validated
 * @param value
 */
import { FormState, StateSetter } from '@/interfaces';

export function setValue(
  stateSetter: StateSetter<FormState>,
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
    };
  });
}
