import FormooseTools from '../index';
import { IStateSetter } from "../../interfaces";

/**
 * Shared Method to manipulate FieldChanges
 * @alias validate/handleFieldChange
 * @category Utils
 * @param {any} event Dom event
 * @param {stateSetter} stateSetter
 * @param {string} field - The field to be validated
 */
function handleFieldChange(event: any, field: string, stateSetter: IStateSetter) {
  event.persist();
  const { target } = event;
  const value = target.checked || target.value;
  FormooseTools.setValue(stateSetter, field, value);
}

export default handleFieldChange;
