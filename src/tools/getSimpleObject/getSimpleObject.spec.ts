import Formoose from '../index';
import { formDataMock, curryStateSetter } from '../../mocks';

describe('[ getSimpleObject - Index Util ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Returns a single key value Object to be submitted on Services', () => {
    const finalValue = 'fresh value';
    Formoose.setValue(curryStateSetter(formData), 'firstName', finalValue);
    Formoose.setValue(curryStateSetter(formData), 'lastName', finalValue);

    // Middle name is optional
    Formoose.setValue(curryStateSetter(formData), 'middleName', '');

    expect(Formoose.getSimpleObject(formData)).toMatchObject({
      firstName: finalValue,
      lastName: finalValue
    });

    expect(Formoose.getSimpleObject(formData)).not.toMatchObject({
      middleName: ''
    });
  });
});
