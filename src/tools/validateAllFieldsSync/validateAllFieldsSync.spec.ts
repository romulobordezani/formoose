import { getSimpleObject, mountFormData, setValue, validateAllFieldsSync } from '../index';
import { curryStateSetter, schema} from '../../__mocks__';

describe('[ TOOLS ][ validateAllFieldsSync ]', () => {

  let formData;
  let modelMock;
  let validationResponse;

  beforeEach(async () => {
    formData = mountFormData(schema());
    modelMock = getSimpleObject(formData);
    validationResponse = null;
  });

  it('Detects invalid Data on formData and sets related messages and errors', async () => {
    setValue(curryStateSetter(formData),'email', 'romulobordezani_gmail.com');
    setValue(curryStateSetter(formData), 'firstName', 123123123);

    try {
      validationResponse = await validateAllFieldsSync(
        schema(),
        formData,
        curryStateSetter(formData),
        translatedMessageId => translatedMessageId
      );
    } catch (e: any) {
      expect(formData.firstName.error).toBeTruthy();
      expect(formData.firstName.message).toBe('error00001');
      expect(e.message).toBe('Invalid Form');
      expect(validationResponse).toBeFalsy();
    }
  });

  it('Lets a good Model Pass', async () => {

    setValue(curryStateSetter(formData),'email', 'romulobordezani@gmail.com');
    setValue(curryStateSetter(formData), 'firstName', 'Mojo');
    setValue(curryStateSetter(formData), 'id', 'fakeId');
    setValue(curryStateSetter(formData), 'lastName', 'Working');

    validationResponse = await validateAllFieldsSync(
      schema(),
      formData,
      curryStateSetter(formData),
      translatedMessageId => translatedMessageId
    );

    expect(formData.firstName.error).toBeNull();
    expect(formData.firstName.message).toBeNull();
    expect(validationResponse).toBeTruthy();
    expect(validationResponse).not.toBeNull();
  });

});
