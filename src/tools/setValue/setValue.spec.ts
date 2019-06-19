import Formoose from '../index';
import { formDataMock, curryStateSetter } from '../../mocks';

describe('[ Set Value - Index Util ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Removes any error in a formData field 1', () => {
    const finalValue = 'fresh value';
    Formoose.setValue(curryStateSetter(formData), 'field1', finalValue);
    expect(formData.field1.value).toBe(finalValue);
  });
});
