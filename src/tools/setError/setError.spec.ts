import FormooseTools from '../index';
import { formDataMock, curryStateSetter } from '../../__mocks__';

describe('[ TOOLS ][ setError ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Sets an error as true in the formData model', () => {

    FormooseTools.setError(
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
