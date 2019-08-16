import { ISchemaGetter, TypesEnum } from "../../interfaces";

const schema: ISchemaGetter = () => {
  return {

    email: {
      max: 50,
      required: true,
      type: TypesEnum.String,
    },

    firstName: {
      max: 50,
      min: 2,
      required: true,
      type: TypesEnum.String
    },

    id: {
      required: true,
      type: TypesEnum.String
    },

    lastName: {
      max: 50,
      required: true,
      type: TypesEnum.String
    },

    middleName: {
      max: 50,
      type: TypesEnum.String
    }
  };
};

export default schema;
