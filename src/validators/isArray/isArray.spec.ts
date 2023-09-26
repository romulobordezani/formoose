import { isArray } from '@/validators';

describe('[ isArray ]', () => {
  it('Boolean positive case', () => {
    expect(isArray(['a', 'b'], 'test test_is_Array')).toBeTruthy();
  });

  it('Check Non Array detection', () => {
    expect(() => {
      isArray('abc', 'test_is_Array');
    }).toThrow(
      new Error(`Array expected, type sent: string - on field: test_is_Array`)
    );
  });
});
