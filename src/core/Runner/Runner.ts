import { IFormData, ISchemaGetter, IModel, ISchema, IStateSetter } from "@/interfaces";

export class Formoose {
  private schema: ISchema;
  private readonly schemaGetter: ISchemaGetter;
  private _formData: IFormData | undefined;
  private _stateSetter: any;
  private readonly t: (any);

  constructor(
    schema: ISchemaGetter,
    t: (any) = translatorKey => translatorKey,
    formData: IFormData = {},
    stateSetter: IStateSetter = state => state,
    model?: IModel
  ) {
    this.schemaGetter = schema;
    this.schema = schema(model);
    this.formData = formData;
    this.stateSetter = stateSetter;
    this.t = t;
  }

  get formData(): IFormData {
    return this._formData as IFormData;
  }

  set formData(formData: IFormData) {
    this._formData = formData;
  }

  get stateSetter(): IStateSetter {
    return this._stateSetter as IStateSetter;
  }

  set stateSetter(stateSetter: IStateSetter) {
    this._stateSetter = stateSetter;
  }
}
