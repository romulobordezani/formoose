import FormooseTools from '../index';
import { formDataMock, curryStateSetter } from '../../__mocks__';

describe('[ TOOLS ][ getModel ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Returns a valid Model from formData', () => {
    const finalValue = 'fresh value';
    FormooseTools.setValue(curryStateSetter(formData), 'field1', finalValue);
    expect(FormooseTools.getModel(formData, 'field1')).toEqual({ field1: finalValue });
  });
});
