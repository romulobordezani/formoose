import FormooseTools from '../index';
import { IStateSetter } from '@/interfaces';

/**
 * Shared Method to manipulate FieldChanges
 * @alias validate/handleFieldChange
 * @category Utils
 * @param {any} event Dom event
 * @param {stateSetter} stateSetter
 * @param {string} field - The field to be validated
 */
async function handleFieldChange(event: any, field: string, stateSetter: IStateSetter) {
  event.persist();
  const { target } = event;
  const { type } = target;
  let value = null;

  switch(type) {
    case 'radio':
      value = target.value;
      break;
    case 'checkbox':
      value = target.checked;
      break;
    default:
      value = target.value;
      break;
  }

  await FormooseTools.setValue(stateSetter, field, value);
}

export default handleFieldChange;
