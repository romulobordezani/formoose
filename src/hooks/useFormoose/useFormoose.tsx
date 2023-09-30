import { useCallback, useState, useEffect, ChangeEvent } from 'react';
import { ChangeEventOrName, CustomError, FormooseTFunction, PayloadFormat, Schema } from 'src/models';
import {
  mountFormState,
  handleFieldChange,
  validateOneField,
  convertModelToForm,
  cleanError,
  getMaxLength,
  getModel,
  getSimpleObject,
  setMessage,
  setValue,
  updateFormDataValues,
  validateAllFieldsSync,
  setError
} from '@/tools';
import { UseFormooseReturn } from 'src/models/UseFormooseReturn';

let validateAfterAllTimer;

const getFieldName = (fieldNameOrEvent: ChangeEventOrName) => {
  if (typeof fieldNameOrEvent === 'string') {
    return fieldNameOrEvent;
  }

  return fieldNameOrEvent?.target?.name;
};

export function useFormoose<State>(schema: Schema, t: FormooseTFunction): UseFormooseReturn<State> {
  const [formData, setFormData] = useState(mountFormState(schema));
  const [lastChangedField, setLastChangedField] = useState<{
    fieldName: string;
    fieldValue: any;
  }>();

  const tools = {
    cleanError: (fieldNameOrEvent: ChangeEventOrName): void => {
      cleanError(setFormData, getFieldName(fieldNameOrEvent));
    },

    convertModelToForm,

    getMaxLength: (fieldName: string) => getMaxLength(fieldName, schema),

    getModel: (fieldName: string) => getModel(formData, fieldName),

    getSimpleObject: (fieldsToSkip: string[], getEmptyValuesToo: boolean) =>
      getSimpleObject(formData, fieldsToSkip, getEmptyValuesToo),

    handleFieldChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const fieldName = event?.target?.name;
      handleFieldChange(event, fieldName, setFormData);
      setLastChangedField({ fieldName, fieldValue: event.target.value });
    },

    mountFormState: () => mountFormState(schema),

    setError: (fieldName: string, error: CustomError) => setError(setFormData, fieldName, error, t),

    setMessage: (fieldName: string, message: string) => setMessage(setFormData, fieldName, message),

    setValue: (fieldName: string, fieldValue: any) => setValue(setFormData, fieldName, fieldValue),

    updateFormDataValues: (updatedModel: PayloadFormat) => updateFormDataValues(formData, updatedModel),

    validateAllFieldsSync: () => validateAllFieldsSync(schema, formData, setFormData, t),

    validateOneField: async (fieldNameOrEvent: ChangeEventOrName) => {
      return await validateOneField(getFieldName(fieldNameOrEvent), schema, formData, setFormData, t);
    }
  };

  const setProps = useCallback(
    (fieldName: string) => {
      return {
        name: fieldName,
        value: formData[fieldName].value,
        onChange: tools.handleFieldChange,
        onFocus: tools.cleanError,
        onBlur: tools.validateOneField
      };
    },
    [tools]
  );

  useEffect(() => {
    clearTimeout(validateAfterAllTimer);

    if (lastChangedField?.fieldName) {
      validateAfterAllTimer = setTimeout(() => {
        tools.validateOneField(lastChangedField.fieldName);
      }, 500);
    }
  }, [lastChangedField]);

  return {
    formData,
    setFormData,
    setProps,
    ...tools
  } as unknown as UseFormooseReturn<State>;
}
