import { MountFormData } from '../core';
import Formoose from '../tools';
import schema from './runner/schema';

export const curryStateSetter = formData => state => {
  if (typeof state === 'object') {
    Object.assign(formData, state);
    return formData;
  }
  Object.assign(formData, state(formData));
  return formData;
};

export const eventMock = {
  persist: () => null,
  target: { value: 'mockedValue' }
};

export const formDataMock = Formoose.getSimpleObject(MountFormData(schema));
