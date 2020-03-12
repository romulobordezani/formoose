import MountFormData from './MountFormData';
import schema from '../../__mocks__/runner/schema';

describe('[ Tools ][ mountFormData ] ', () => {
  it('Mounts the right form data', () => {
    expect(MountFormData(schema()))
      .toMatchObject({
        id: {
          error: undefined,
          message: undefined,
          value: '',
        },
        lastName: {
          error: undefined,
          message: undefined,
          value: '',
        }
      });
  });
});
