import { Schema, FormState } from 'src/models';

export const mountFormState = (schema: Schema): FormState => {
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
