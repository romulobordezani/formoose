import { Validate } from './core';
import FormooseTools from './tools';
import { IFormData, ISchemaGetter, ICustomError, IModel, ISchema, IStateSetter } from "@/interfaces";

import {
  cleanError,
  convertModelToForm,
  setMessage,
  setError,
  setValue,
  handleFieldChange,
  getModel,
  getMaxLength,
  mountFormData,
  updateFormDataValues,
  getSimpleObject,
  validateAllFieldsSync,
  validateOneField
} from "@/tools";

class Formoose {

  public tools: FormooseTools;
  public validate: (model: {}, propsToValidate: string[], schema: ISchema) => Promise<any>;
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
    this.tools = FormooseTools;
    this.validate = Validate;
    this.t = t;

    this.tools = {
      cleanError: (field: string) => cleanError(this.stateSetter, field),
      convertModelToForm,
      getMaxLength: (field: string) => getMaxLength(this.formData, field, this.schema),
      getModel: (field: string) => getModel(this.formData, field),
      getSimpleObject: (fieldsToSkip: string[], getEmptyValuesToo: boolean)  => getSimpleObject(this.formData, fieldsToSkip, getEmptyValuesToo),
      handleFieldChange: async (event: any, field: string) => {
        await handleFieldChange(event, field, this.stateSetter);
        this.schema = this.schemaGetter(getSimpleObject(this.formData, null, true));
      },
      mountFormData: () => mountFormData(this.schema),
      setError: (field: string, error: ICustomError) => setError(this.stateSetter, field, error, this.t),
      setForm: (outerFormData: IFormData, outerStateSetter: any) => {
        this.formData = outerFormData;
        this.stateSetter = outerStateSetter;
      },
      setMessage: (field: string, message: string) => setMessage(this.stateSetter, field, message),
      setValue: (field: string, value: any) => setValue(this.stateSetter, field, value),
      updateFormDataValues: (updatedModel: IModel) => updateFormDataValues(this.formData, updatedModel),
      validateAllFieldsSync: () => validateAllFieldsSync(this.schema, this.formData, this.stateSetter, this.t),
      validateOneField: (field: string) => validateOneField(field, this.schema, this.formData, this.stateSetter, this.t)
    }
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

export default Formoose;
