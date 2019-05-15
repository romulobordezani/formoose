import UserValidate from './validate';

const mockedGoodUser = {
    _id: '5c74263a4056c17511f6cead',
    password: 'Test123!',
    active: true,
    firstName: 'Dallas',
    email: 'dallas_owen@gmail.com',
    middleName: 'adasdasd',
    phone: 'asdasdasdasdasd'
};

describe('[ USER VALIDATIONS ]', () => {
  describe('[ Positive Case ]', () => {
    it('Validates Only Sent Fields', () => {
      expect(
        UserValidate(mockedGoodUser, [
          'email',
          'middleName',
          'password',
          'phone'
        ])
      ).toBeTruthy();
    });
  });
});
