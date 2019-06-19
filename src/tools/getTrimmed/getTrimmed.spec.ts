import Formoose from '../index';
import { formDataMock, curryStateSetter, schema } from '../../mocks';

describe('[ getTrimmed - Index Util ]', () => {
  let formData;
  let mockedSchema;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
    mockedSchema = schema();
  });

  it('Returns a single key value Object to be submitted on Services', () => {
    const finalValue = 'fresh value';

    Formoose.setValue(curryStateSetter(formData), 'firstName', finalValue);
    Formoose.setValue(curryStateSetter(formData), 'lastName', finalValue);
    Formoose.setValue(curryStateSetter(formData), 'middleName', '');

    expect(
      Formoose.getTrimmed(formData, mockedSchema)
    ).toMatchObject({
      firstName: finalValue,
      lastName: finalValue,
      middleName: ''
    });
  });
});
