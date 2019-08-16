import { ISchema, IModel } from "./index";

type ISchemaGetter = (model?: IModel) => ISchema;

export default ISchemaGetter;
