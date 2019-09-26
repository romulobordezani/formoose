import IFormData from "../../interfaces/IFormData";

function getModel(formData: IFormData, field: string) {
  return {
    [field]: formData[field].value
  };
}

export default getModel;
