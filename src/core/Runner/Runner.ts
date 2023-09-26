import {
  FormState,
  ISchemaGetter,
  IModel,
  ISchema,
  StateSetter
} from '@/interfaces';

export class Formoose {
  private schema: ISchema;
  private readonly schemaGetter: ISchemaGetter;
  private _formData: FormState | undefined;
  private _stateSetter: any;
  private readonly t: any;

  constructor(
    schema: ISchemaGetter,
    t: any = (translatorKey) => translatorKey,
    formData: FormState = {},
    stateSetter: StateSetter<FormState> = (state) => state,
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

  get stateSetter(): StateSetter<FormState> {
    return this._stateSetter as StateSetter<FormState>;
  }

  set stateSetter(stateSetter: StateSetter<FormState>) {
    this._stateSetter = stateSetter;
  }
}
