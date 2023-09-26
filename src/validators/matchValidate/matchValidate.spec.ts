import { matchValidate } from '@/validators';

const emailValidator = (email) => {
  const emailRegex =
    /* eslint-disable-next-line */
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(emailRegex);
};

describe('[ matchValidate ]', () => {
  it('Blocks bad e-mail', () => {
    expect(() => {
      matchValidate('abcd', emailValidator, 'test_matchValidate');
    }).toThrow(
      new Error(
        'Value not passed Custom Validation emailValidator - on field: test_matchValidate'
      )
    );
  });

  it('Allows good email', () => {
    expect(
      matchValidate(
        'romulobordezani@gmail.com',
        emailValidator,
        'test_matchValidate'
      )
    ).toBeTruthy();
  });
});
