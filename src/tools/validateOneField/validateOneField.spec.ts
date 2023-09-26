import { validateOneField, setValue, mountFormData } from '../';
import { curryStateSetter, schema } from '../../__mocks__';

describe('[ TOOLS ][ validateOneField ]', () => {
  let formData;

  beforeEach(() => {
    formData = mountFormData(schema());
  });

  afterEach(() => {
    formData = mountFormData(schema());
  });

  it('Successful values pass by without errors', async () => {
    setValue(curryStateSetter(formData), 'email', 'romulobordezani@gmail.com');

    const validationResponse = await validateOneField(
      'email',
      schema(),
      formData,
      curryStateSetter(formData),
      (translatedMessageId) => translatedMessageId
    );

    expect(validationResponse).toBeTruthy();
  });

  it('Detects errors and throw a CustomError', async () => {
    setValue(curryStateSetter(formData), 'email', 123456);

    await validateOneField(
      'email',
      schema(),
      formData,
      curryStateSetter(formData),
      (translatedMessageId) => translatedMessageId
    );

    expect(formData.email.error).toBeTruthy();
  });
});
