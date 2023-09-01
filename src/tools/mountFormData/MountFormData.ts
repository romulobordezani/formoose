import { ISchema, IFormData } from '@/interfaces';

const MountFormData = (schema: ISchema) => {
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

export default MountFormData;

