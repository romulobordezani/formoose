import { setValue, getModel } from '../index';
import { formDataMock, curryStateSetter } from '../../__mocks__';

describe('[ TOOLS ][ getModel ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Returns a valid Model from formData', () => {
    const finalValue = 'fresh value';
    setValue(curryStateSetter(formData), 'field1', finalValue);
    expect(getModel(formData, 'field1')).toEqual({ field1: finalValue });
  });
});
