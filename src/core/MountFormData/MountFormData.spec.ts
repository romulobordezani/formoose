import MountFormData from './MountFormData';
import schema from '../../mocks/runner/schema';

describe('[ Tools ][ MountFormData ] ', () => {
  it('Mounts the right form data', () => {
    expect(MountFormData(schema()))
      .toMatchObject({
        id: {
          error: null,
          message: null,
          value: null,
        },
        lastName: {
          error: null,
          message: null,
          value: null,
        }
      });
  });
});
