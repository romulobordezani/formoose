import { ICustomError, TypesEnum } from '.';

export interface ISchemaItem {
  max?: number | undefined,
  min?: number  | undefined,
  required?: boolean  | undefined,
  type: TypesEnum,
  validate?: () => ICustomError,
  enum?: Record<string, string>
}
