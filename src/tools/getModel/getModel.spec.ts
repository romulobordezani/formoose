import Formoose from '../index';
import { formDataMock, curryStateSetter } from '../../mocks';

describe('[ getModel - Index Util ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Returns a valid Model from formData', () => {
    const finalValue = 'fresh value';
    Formoose.setValue(curryStateSetter(formData), 'field1', finalValue);
    expect(Formoose.getModel(formData, 'field1')).toEqual({ field1: finalValue });
  });
});
