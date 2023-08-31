/**
 * Shared Method  to change the value of a specific Field
 * @category Utils
 * @alias validate/setValue
 * @param {stateSetter} stateSetter
 * @param {string} field - The field to be validated
 * @param value
 */
import { IStateSetter } from '@/interfaces';

async function setValue(stateSetter: IStateSetter, field: string, value: any) {
  // TODO - Do not let set a new field that doesn't exists of formData
  // TODO - Better named as UpdateValue???
  await stateSetter(state => ({
    ...state,
    [field]: {
      ...state[field],
      value
    }
  }));
}

export default setValue;
