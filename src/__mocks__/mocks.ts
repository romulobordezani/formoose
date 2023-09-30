import schema from './runner/schema';
import { mountFormState } from '../tools';
import { FormState } from '../models';
import { assign } from 'lodash';

/**
 * Encapsulates formData with a curry call, simulating a React Hook setState
 * @param {FormState} formData
 */
export const curryStateSetter = (formData: FormState) => (state) => {
  if (typeof state === 'object') {
    assign(formData, state);
    return formData;
  }

  assign(formData, state(formData));
  return formData;
};

export const eventMock = {
  persist: () => null,
  target: {
    value: 'mockedValue'
  }
};

export const formDataMock = mountFormState(schema());
