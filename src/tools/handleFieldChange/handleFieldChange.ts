import FormooseTools from '../index';

/**
 * Shared Method to manipulate FieldChanges
 * @alias validate/handleFieldChange
 * @category Utils
 * @param event Dom event
 * @param {stateSetter} stateSetter
 * @param {string} field - The field to be validated
 */
function handleFieldChange(event, field, stateSetter) {
  event.persist();
  const { target } = event;
  const value = target.checked || target.value;
  FormooseTools.setValue(stateSetter, field, value);
}

export default handleFieldChange;
