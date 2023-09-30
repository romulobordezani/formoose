import { FormState } from '@/models';

export function getModel(formState: FormState, fieldName: string): Record<string, string> {
  return {
    [fieldName]: formState[fieldName].value
  };
}
