import Formoose from '../index';
import { formDataMock, curryStateSetter } from '../../mocks';

describe('[ setError - Index Util ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Sets an error as true in the formData model', () => {
    Formoose.setError(
      curryStateSetter(formData),
      'field1',
      { translatedMessageId: 'got an error' },
      translatedMessageId => translatedMessageId
    );
    expect(formData.field1).toMatchObject({
      error: true,
      message: 'got an error'
    });
  });
});
