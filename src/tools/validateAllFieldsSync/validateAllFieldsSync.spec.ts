import { omit } from 'lodash';
import Formoose from '../index';
import { curryStateSetter, formDataMock } from '../../mocks';

describe('[ Index Sync - Util ]', () => {
  let formData;

  beforeEach(() => {
    formData = omit(Object.assign({}, formDataMock), ['acceptedTerms']);
  });

  it('Detects invalid Data on formData model for Users', async () => {
    Formoose.updateFormDataValues(formData, omit(UserMock.getPhysician(), ['acceptedTerms']));
    Formoose.setValue(curryStateSetter(formData), 'firstName', 123123123);
    let validationResponse = null;
    try {
      validationResponse = await Formoose.validateAllFieldsSync(
        UserValidate,
        formData,
        curryStateSetter(formData),
        translatedMessageId => translatedMessageId,
        true,
        'Validate'
      );
    } catch (e) {
      expect(formData.firstName.error).toBeTruthy();
      expect(formData.firstName.message).toBe('error00001');
      expect(e.message).toBe('String expected, type sent: number - on field: firstName');
      expect(validationResponse).toBeFalsy();
      expect(validationResponse).not.toBeNull();
    }
  });

  it('Let a good Model Pass', async () => {
    const secondFormData = omit(Object.assign({}, UserFormData), ['acceptedTerms']);
    Formoose.updateFormDataValues(secondFormData, omit(UserMock.getPhysician(), ['acceptedTerms']));

    const validationResponse = await Formoose.validateAllFieldsSync(
      UserValidate,
      secondFormData,
      curryStateSetter(secondFormData),
      translatedMessageId => translatedMessageId,
      true,
      'Validate'
    );

    expect(secondFormData.firstName.error).toBeNull();
    expect(secondFormData.firstName.message).toBeNull();
    expect(validationResponse).toBeTruthy();
    expect(validationResponse).not.toBeNull();
  });
});
