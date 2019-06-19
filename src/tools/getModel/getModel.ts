function getModel(formData, field) {
  return {
    [field]: formData[field].value
  };
}

export default getModel;
