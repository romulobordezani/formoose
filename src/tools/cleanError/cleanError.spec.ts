import FormooseTools from '../index';
import { formDataMock, curryStateSetter } from '../../__mocks__';
import CustomError from '../../core/CustomError';

describe('[ Clean Error - Index Util ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Removes any error in a formData', () => {
    const fakeError = new CustomError('Fake Error');

    FormooseTools.setError(
      curryStateSetter(formData),
      'field1',
      fakeError,
      () => null
    );
    FormooseTools.cleanError(curryStateSetter(formData), 'field1');
    expect(formData.field1.error).toBeNull();
  });
});
