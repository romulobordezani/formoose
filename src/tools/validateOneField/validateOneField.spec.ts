import Formoose from '../index';
import { curryStateSetter, formDataMock } from '../../mocks';

describe('[ validateOneField - util ]', () => {
  const { validateOneField, setValue } = Formoose;
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Successful values pass by without errors', () => {
    expect(
      validateOneField(
        'email',
        UserValidate,
        formData,
        curryStateSetter(formData),
        translatedMessageId => translatedMessageId
      )
    ).toBeTruthy();
  });

  it('Detects errors and throw a CustomError', async () => {
    setValue(curryStateSetter(formData), 'email', 'bad-email.chip');
    validateOneField(
      'email',
      UserValidate,
      formData,
      curryStateSetter(formData),
      translatedMessageId => translatedMessageId
    );

    await waitForState();

    expect(formData.email.error).toBeTruthy();
  });
});
