import Formoose from '../index';
import { formDataMock, curryStateSetter } from '../../mocks';

describe('[ Clean Error - Index Util ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Removes any error in a formData', () => {
    Formoose.setError(
      curryStateSetter(formData),
      'field1',
      { translatedMessageId: 'got an error' },
      () => null
    );
    Formoose.cleanError(curryStateSetter(formData), 'field1');
    expect(formData.field1.error).toBeNull();
  });
});
