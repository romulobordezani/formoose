import { FormState, ISchemaGetter, IModel, ISchema, IStateSetter } from "@/interfaces";

export class Formoose {
  private schema: ISchema;
  private readonly schemaGetter: ISchemaGetter;
  private _formData: FormState | undefined;
  private _stateSetter: any;
  private readonly t: (any);

  constructor(
    schema: ISchemaGetter,
    t: (any) = translatorKey => translatorKey,
    formData: FormState = {},
    stateSetter: IStateSetter<FormState> = state => state,
    model?: IModel
  ) {
    this.schemaGetter = schema;
    this.schema = schema(model);
    this.formData = formData;
    this.stateSetter = stateSetter;
    this.t = t;
  }

  get formData(): FormState {
    return this._formData as FormState;
  }

  set formData(formData: FormState) {
    this._formData = formData;
  }

  get stateSetter(): IStateSetter<FormState> {
    return this._stateSetter as IStateSetter<FormState>;
  }

  set stateSetter(stateSetter: IStateSetter<FormState>) {
    this._stateSetter = stateSetter;
  }
}
