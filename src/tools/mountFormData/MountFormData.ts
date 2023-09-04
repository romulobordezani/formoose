import { ISchema, IFormData } from '@/interfaces';

export const mountFormData = (schema: ISchema) => {
  const formData: IFormData = {};

  Object.keys(schema).map((key: string) => {
    return formData[key] = {
      error: undefined,
      message: undefined,
      value: ''
    };
  });

  return formData;
};

