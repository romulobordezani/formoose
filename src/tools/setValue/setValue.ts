/**
 * Shared Method  to change the value of a specific Field
 * @category Utils
 * @alias validate/setValue
 * @param {stateSetter} stateSetter
 * @param {string} field - The field to be validated
 * @param value
 */
function setValue(stateSetter, field, value) {
  // TODO - Do not let set a new field that doesn'' exists
  // TODO - Better named as UpdateValue???
  stateSetter(state => ({
    ...state,
    [field]: {
      ...state[field],
      value
    }
  }));
}

export default setValue;
