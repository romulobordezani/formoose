import CustomError from "../core/CustomError";
import TypesEnum from "./Types.enum";

export default interface ISchemaItem {
  max?: number | undefined,
  min?: number  | undefined,
  required?: boolean  | undefined,
  type: TypesEnum,
  validate?: () => CustomError,
  enum?: any
}
