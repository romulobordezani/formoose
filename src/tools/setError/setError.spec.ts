import { setError } from '@/tools';
import { formDataMock, curryStateSetter } from '../../__mocks__';
import { ErrorCodes, FormooseError } from '@/custom-errors';
import { assign } from 'lodash';

describe('[ TOOLS ][ setError() ]', () => {
  let formData;

  beforeEach(() => {
    formData = assign({}, formDataMock);
  });

  it('Sets an error as true in the formData model', () => {
    const fakeError = new FormooseError('Fake Error', 'field1', ErrorCodes['is-not-a-boolean']);

    setError(curryStateSetter(formData), 'field1', fakeError, (translatedMessageKey: string) => translatedMessageKey);

    expect(formData.field1).toMatchObject({
      error: fakeError,
      message: ErrorCodes['is-not-a-boolean']
    });
  });
});
