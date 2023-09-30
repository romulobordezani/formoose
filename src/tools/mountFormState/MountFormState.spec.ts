import { mountFormState } from './MountFormState';
import schema from '../../__mocks__/runner/schema';

describe('[ Tools ][ mountFormState() ] ', () => {
  it('Mounts the right form data', () => {
    expect(mountFormState(schema())).toMatchObject({
      id: {
        error: undefined,
        message: undefined,
        value: ''
      },
      lastName: {
        error: undefined,
        message: undefined,
        value: ''
      }
    });
  });
});
