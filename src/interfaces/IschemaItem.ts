import { TypesEnum } from '.';

export interface ISchemaItem {
  max?: number | undefined,
  min?: number | undefined,
  required?: boolean | undefined,
  type: TypesEnum,
  validate?: {
    callback: () => boolean,
    message: string
  },
  enum?: Record<string, string>
}
