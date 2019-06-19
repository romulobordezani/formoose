import TypeEnum from '../../interfaces/Types.enum';

export default () => {
  return {
    email: {
      max: 50,
      required: true,
      type: TypeEnum.String,
    },
    firstName: {
      max: 50,
      min: 2,
      required: true,
      type: TypeEnum.String
    },
    id: {
      required: true,
      type: TypeEnum.String
    },
    lastName: {
      max: 50,
      required: true,
      type: TypeEnum.String
    },
    middleName: {
      max: 50,
      type: TypeEnum.String
    }
  };
};
