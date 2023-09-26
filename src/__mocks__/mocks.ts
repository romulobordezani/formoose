import schema from './runner/schema';
import { mountFormData } from '../tools';
import { FormState, StateSetter } from '../interfaces';

/**
 * Encapsulates formData with a curry call, simulating a React Hook setState
 * @param {FormState} formData
 */
export const curryStateSetter_2: StateSetter<FormState> =
  (formData: FormState) => (prevState: (arg0: FormState) => FormState) => {
    if (typeof prevState === 'object') {
      return Object.assign(formData, prevState);
    }

    return Object.assign(formData, prevState(formData));
  };

export const curryStateSetter = (formData: FormState) => (state) => {
  if (typeof state === 'object') {
    Object.assign(formData, state);
    return formData;
  }

  Object.assign(formData, state(formData));
  return formData;
};

export const eventMock = {
  persist: () => null,
  target: {
    value: 'mockedValue'
  }
};

export const formDataMock = mountFormData(schema());
