import { setValue, getSimpleObject } from '../index';
import { formDataMock, curryStateSetter } from '../../__mocks__';
import { assign } from 'lodash';

describe('[ TOOLS ][ getSimpleObject ]', () => {
  let formData;
  const finalValue = 'final value';

  beforeEach(() => {
    formData = assign({}, formDataMock);
    setValue(curryStateSetter(formData), 'firstName', finalValue);
    setValue(curryStateSetter(formData), 'lastName', finalValue);
    setValue(curryStateSetter(formData), 'middleName', '');
  });

  it('Returns a single key > value Object from a formData', () => {
    expect(getSimpleObject(formData)).toMatchObject({
      firstName: finalValue,
      lastName: finalValue
    });

    expect(getSimpleObject(formData)).not.toMatchObject({
      middleName: ''
    });
  });

  it('Returns empty values too', () => {
    expect(getSimpleObject(formData, null, true)).toStrictEqual({
      email: '',
      firstName: finalValue,
      id: '',
      lastName: finalValue,
      middleName: ''
    });

    expect(getSimpleObject(formData)).not.toMatchObject({
      middleName: ''
    });
  });

  it('Returns filtered fields', () => {
    expect(getSimpleObject(formData, ['firstName'], true)).toStrictEqual({
      email: '',
      id: '',
      lastName: finalValue,
      middleName: ''
    });
  });
});
