import schema from './runner/schema';
import { mountFormData } from '../tools';
import {IFormData} from "../interfaces";

/**
 * Encapsulates formData with a curry call, simulating a React Hook State
 * @param {IFormData} formData
 */
export const curryStateSetter = (formData: IFormData) => state => {
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
