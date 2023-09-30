import { mountFormState, setValue, validateAllFieldsSync } from '../index';
import { curryStateSetter, schema } from '../../__mocks__';
import { ErrorCodes } from '@/custom-errors';

describe('[ TOOLS ][ validateAllFieldsSync ]', () => {
  let formData;
  let validationResponse;

  beforeEach(async () => {
    formData = mountFormState(schema());
    validationResponse = null;
  });

  it('Detects invalid Data on formData and sets related messages and errors', async () => {
    setValue(curryStateSetter(formData), 'email', 'romulobordezani_gmail.com');
    setValue(curryStateSetter(formData), 'firstName', 123123123);

    try {
      validationResponse = await validateAllFieldsSync(
        schema(),
        formData,
        curryStateSetter(formData),
        (translatedMessageKey: string) => translatedMessageKey
      );
    } catch (e: any) {
      expect(formData.firstName.error).toBeTruthy();
      expect(formData.firstName.message).toBe(ErrorCodes['alphabetical-chars-only']);
      expect(e.message).toBe('Invalid Form');
      expect(validationResponse).toBeFalsy();
    }
  });

  it('Lets a good Model Pass', async () => {
    setValue(curryStateSetter(formData), 'email', 'romulobordezani@gmail.com');
    setValue(curryStateSetter(formData), 'firstName', 'Mojo');
    setValue(curryStateSetter(formData), 'id', 'fakeId');
    setValue(curryStateSetter(formData), 'lastName', 'Working');

    validationResponse = await validateAllFieldsSync(
      schema(),
      formData,
      curryStateSetter(formData),
      (translatedMessageKey: string) => translatedMessageKey
    );

    expect(formData.firstName.error).toBeNull();
    expect(formData.firstName.message).toBeNull();
    expect(validationResponse).toBeTruthy();
    expect(validationResponse).not.toBeNull();
  });
});
