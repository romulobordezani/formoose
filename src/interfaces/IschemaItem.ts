import { ICustomError, TypesEnum } from '.';

interface ISchemaItem {
  max?: number | undefined,
  min?: number  | undefined,
  required?: boolean  | undefined,
  type: TypesEnum,
  validate?: () => ICustomError,
  enum?: any
}

export default ISchemaItem;
