import FormooseTools from '../index';
import { formDataMock, curryStateSetter } from '../../__mocks__';

describe('[ Clean Error - Index Util ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Removes any error in a formData', () => {
    FormooseTools.setError(
      curryStateSetter(formData),
      'field1',
      { translatedMessageId: 'got an error' },
      () => null
    );
    FormooseTools.cleanError(curryStateSetter(formData), 'field1');
    expect(formData.field1.error).toBeNull();
  });
});
