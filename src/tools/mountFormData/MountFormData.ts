import { ISchema, IFormData } from '../../interfaces';

// TODO move it to tools
const MountFormData = (schema: ISchema) => {
  const formData: IFormData = {};

  Object.keys(schema).map((key: string) => {
    formData[key] = {
      error: undefined,
      message: undefined,
      value: ''
    };
  });

  return formData;
};

export default MountFormData;

