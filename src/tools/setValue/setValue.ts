/**
 * Shared Method  to change the value of a specific Field
 * @category Utils
 * @alias validate/setValue
 * @param {stateSetter} stateSetter
 * @param {string} field - The field to be validated
 * @param value
 */
function setValue(stateSetter, field, value) {
  stateSetter(state => ({
    ...state,
    [field]: {
      ...state[field],
      value
    }
  }));
}

export default setValue;
