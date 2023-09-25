import { FormState } from '@/interfaces';

export function getModel(formData: FormState, field: string) {
  return {
    [field]: formData[field].value
  };
}
