import { setValue } from '../index';
import { formDataMock, curryStateSetter } from '../../__mocks__';
import { assign } from 'lodash';

describe('[ TOOLS ][ setValue ]', () => {
  let formData;

  beforeEach(() => {
    formData = assign({}, formDataMock);
  });

  it('Removes any error in a formData field 1', () => {
    const finalValue = 'fresh value';
    setValue(curryStateSetter(formData), 'field1', finalValue);
    expect(formData.field1.value).toBe(finalValue);
  });
});
