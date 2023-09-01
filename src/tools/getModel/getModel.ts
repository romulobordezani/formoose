import { IFormData } from '@/interfaces';

export function getModel(formData: IFormData, field: string) {
  return {
    [field]: formData[field].value
  };
}
