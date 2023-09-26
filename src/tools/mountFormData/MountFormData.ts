import { ISchema, FormState } from '@/interfaces';

export const mountFormData = (schema: ISchema) => {
  const formData: FormState = {};

  Object.keys(schema).map((key: string) => {
    return (formData[key] = {
      error: undefined,
      message: undefined,
      value: ''
    });
  });

  return formData;
};
