import { setError, cleanError } from '../index';
import { formDataMock, curryStateSetter } from '../../__mocks__';
import { CustomError } from '@/custom-errors';

describe('[ Clean Error - Index Util ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Removes any error in a formData', () => {
    const fakeError = new CustomError('Fake Error');

    setError(
      curryStateSetter(formData),
      'field1',
      fakeError,
      () => null
    );

    cleanError(curryStateSetter(formData), 'field1');
    
    expect(formData.field1.error).toBeNull();
  });
});
