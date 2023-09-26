import { isEmpty } from '@/validators';

describe('[ isEmpty ]', () => {
  it('Allows full filed string', () => {
    expect(isEmpty('asd', 'test-is-empty')).toBeTruthy();
  });

  it('Check null detection', () => {
    expect(() => {
      isEmpty(null, 'test-is-empty');
    }).toThrow(
      new Error(
        "Required field \"test-is-empty\" is empty, sent type 'object' with value: 'null' - on field: test-is-empty"
      )
    );
  });

  it('Check undefined detection', () => {
    expect(() => {
      isEmpty(undefined, 'test-is-empty');
    }).toThrow(
      new Error(
        "Required field \"test-is-empty\" is empty, sent type 'undefined' with value: 'undefined' - on field: test-is-empty"
      )
    );
  });
});
