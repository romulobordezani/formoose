import { setError, cleanError } from '../index';
import { formDataMock, curryStateSetter } from '../../__mocks__';
import { CustomError } from '@/custom-errors';
import { FormState } from '../../interfaces';
import { assign } from 'lodash';

describe('cleanError()', () => {
  let formState: FormState;

  beforeEach(() => {
    formState = assign({}, formDataMock);
  });

  it('Removes any error in a formData', () => {
    const fakeError = new CustomError('Fake Error');

    setError(curryStateSetter(formState), 'field1', fakeError, () => null);

    cleanError(curryStateSetter(formState), 'field1');

    expect(formState.field1.error).toBeNull();
  });
});
