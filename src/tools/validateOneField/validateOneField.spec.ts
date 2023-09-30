import { FormState } from '@/models';
import { validateOneField, setValue, mountFormState } from '../';
import { curryStateSetter, schema } from '../../__mocks__';

describe('[ TOOLS ][ validateOneField ]', () => {
  let formState: FormState;

  beforeEach(() => {
    formState = mountFormState(schema());
  });

  afterEach(() => {
    formState = mountFormState(schema());
  });

  it('Successful values pass by without errors', async () => {
    setValue(curryStateSetter(formState), 'email', 'romulobordezani@gmail.com');

    const validationResponse = await validateOneField(
      'email',
      schema(),
      formState,
      curryStateSetter(formState),
      (translatedMessageKey: string) => translatedMessageKey
    );

    expect(validationResponse).toBeTruthy();
  });

  it('Detects errors and throw a FormooseError', async () => {
    setValue(curryStateSetter(formState), 'email', 123456);

    await validateOneField(
      'email',
      schema(),
      formState,
      curryStateSetter(formState),
      (translatedMessageKey: string) => translatedMessageKey
    );

    expect(formState.email.error).toBeTruthy();
  });
});
