import { setValue, getModel } from '../index';
import { formDataMock, curryStateSetter } from '../../__mocks__';
import { assign } from 'lodash';
import { FormState } from '@/models';

describe('[ TOOLS ][ getModel() ]', () => {
  let formState: FormState;

  beforeEach(() => {
    formState = assign({}, formDataMock);
  });

  it('Returns a valid Model from formData', () => {
    const finalValue = 'fresh value';
    setValue(curryStateSetter(formState), 'field1', finalValue);
    expect(getModel(formState, 'field1')).toEqual({ field1: finalValue });
  });
});
