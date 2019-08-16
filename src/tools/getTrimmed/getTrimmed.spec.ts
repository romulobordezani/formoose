import FormooseTools from '../index';
import { formDataMock, curryStateSetter, schema } from '../../__mocks__';

describe('[ TOOLS ][ getTrimmed ]', () => {
  let formData;
  let mockedSchema;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
    mockedSchema = schema();
  });

  it('Returns a single key value Object to be submitted on Services', () => {
    const finalValue = 'fresh value';

    FormooseTools.setValue(curryStateSetter(formData), 'firstName', finalValue);
    FormooseTools.setValue(curryStateSetter(formData), 'lastName', finalValue);
    FormooseTools.setValue(curryStateSetter(formData), 'middleName', '');

    expect(
      FormooseTools.getTrimmed(formData, mockedSchema)
    ).toMatchObject({
      firstName: finalValue,
      lastName: finalValue,
      middleName: ''
    });
  });
});
