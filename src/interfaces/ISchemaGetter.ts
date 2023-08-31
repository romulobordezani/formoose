import { ISchema, IModel } from '.';

export type ISchemaGetter = (model?: IModel) => ISchema;
