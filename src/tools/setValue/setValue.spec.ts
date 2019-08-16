import FormooseTools from '../index';
import { formDataMock, curryStateSetter } from '../../__mocks__';

describe('{ TOOLS ][ setValue ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Removes any error in a formData field 1', () => {
    const finalValue = 'fresh value';
    FormooseTools.setValue(curryStateSetter(formData), 'field1', finalValue);
    expect(formData.field1.value).toBe(finalValue);
  });
});
