import { SchemaGetter, SupportedTypesEnum } from '../../models';

const schema: SchemaGetter = () => {
  return {
    email: {
      max: 50,
      required: true,
      type: SupportedTypesEnum.String
    },

    firstName: {
      max: 50,
      min: 2,
      required: true,
      type: SupportedTypesEnum.String
    },

    id: {
      required: true,
      type: SupportedTypesEnum.String
    },

    lastName: {
      max: 50,
      required: true,
      type: SupportedTypesEnum.String
    },

    middleName: {
      max: 50,
      type: SupportedTypesEnum.String
    }
  };
};

export default schema;
