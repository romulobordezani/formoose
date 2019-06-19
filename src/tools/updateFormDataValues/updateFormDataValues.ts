/**
 * Updates all form data based on an User
 * @category Utils
 * @alias validate/updateFormDataValues
 * @param formData All fields state from component
 * @param {UserModel} user User Model Abstraction
 * @returns {void}
 */
function updateFormDataValues(formData, user) {
  const objectAdapter = {};
  Object.keys(user).map(key => {
    if (key !== 'jwt' && key !== 'isLoggedIn') {
      objectAdapter[key] = { value: user[key] };
    }
    return null;
  });
  Object.assign(formData, objectAdapter);
}

export default updateFormDataValues;
