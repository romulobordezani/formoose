import { setValue } from '../setValue';
import { FormState, StateSetter } from 'src/models';

/**
 * Shared Method to manipulate FieldChanges
 * @alias tools/handleFieldChange
 * @category Tools
 * @param {any} event Dom event
 * @param {stateSetter} stateSetter
 * @param {string} fieldName - The field to be validated
 */
export function handleFieldChange(event: any, fieldName: string, stateSetter: StateSetter<FormState>): void {
  const { target } = event;
  const { type } = target;
  let fieldValue = null;

  switch (type) {
    case 'radio':
      fieldValue = target.value;
      break;
    case 'checkbox':
      fieldValue = target.checked;
      break;
    default:
      fieldValue = target.value;
      break;
  }

  setValue(stateSetter, fieldName, fieldValue);
}
