import { IFormData } from '@/interfaces';

function getModel(formData: IFormData, field: string) {
  return {
    [field]: formData[field].value
  };
}

export default getModel;
