import { getSimpleObject, setValue, updateFormDataValues } from '../';
import { curryStateSetter, schema } from '../../__mocks__';
import { mountFormData } from '../../tools';

describe('[ TOOLS ][ updateFormDataValues ]', () => {
  let formData;
  let UserMock;

  beforeEach(() => {
    formData = mountFormData(schema());
    setValue(curryStateSetter(formData), 'email', 'romulobordezani@gmail.com');
    UserMock = getSimpleObject(formData);
  });

  it('Merge updates successfully', () => {
    updateFormDataValues(formData, UserMock);
    expect(formData.email.value).toBe('romulobordezani@gmail.com');
  });
});
