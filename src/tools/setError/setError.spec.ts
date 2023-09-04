import { setError } from '@/tools';
import { formDataMock, curryStateSetter } from '../../__mocks__';
import { CustomError } from '@/custom-errors';

describe('[ TOOLS ][ setError ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Sets an error as true in the formData model', () => {

    const fakeError = new CustomError('Fake Error', 'field1', 'got an error');

    setError(
      curryStateSetter(formData),
      'field1',
      fakeError,
      translatedMessageId => translatedMessageId
    );

    expect(formData.field1).toMatchObject({
      error: true,
      message: 'got an error'
    });
  });
});
