import { convertModelToForm } from '@/tools';
import { FormState } from './FormState';
import { StateSetter } from './StateSetter';
import { ChangeEvent } from 'react';
import { ChangeEventOrName } from './ChangeEventOrName';
import { PayloadFormat } from './PayloadFormat';
import { CustomError } from './CustomError';

/**
 * @category Types and Interfaces
 */
export type UseFormooseReturn<State> = {
  formData: FormState;

  setFormData: StateSetter<State>;

  mountFormState: () => FormState;

  handleFieldChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;

  validateOneField: (fieldNameOrEvent: ChangeEventOrName) => Promise<boolean>;

  convertModelToForm: typeof convertModelToForm;

  cleanError: (fieldNameOrEvent: ChangeEventOrName) => void;

  getMaxLength: (fieldName: string) => number;

  getModel: (fieldName: string) => PayloadFormat;

  getSimpleObject: (fieldsToSkip: string[], getEmptyValuesToo: boolean) => PayloadFormat;

  setMessage: (fieldName: string, message: string) => void;

  setValue: (fieldName: string, fieldValue: any) => void;

  updateFormDataValues: (updatedModel: PayloadFormat) => void;

  validateAllFieldsSync: () => Promise<boolean>;

  setError: (fieldName: string, error: CustomError) => void;

  setProps: (fieldName: string) => {
    name: string;
    value: string;

    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => Promise<void>;

    onFocus: (fieldNameOrEvent: ChangeEventOrName) => Promise<void>;

    onBlur: (fieldNameOrEvent: ChangeEventOrName) => boolean;
  };
};
