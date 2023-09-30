import { maxLength } from '@/validators';

describe('[ maxLength ]', () => {
  it('Check the max length positive case', () => {
    expect(maxLength('abcd', 4, 'test')).toBeTruthy();
  });

  it('Check if it detects strings exceeding max-length', () => {
    expect(() => {
      maxLength('abcdef', 4, 'tests');
    }).toThrow(new Error('String exceed the size of 4 characters with 6 - on field: tests'));
  });

  it('Check if it detects weird types as objects, numbers and arrays', () => {
    expect(() => {
      maxLength({}, 4, 'tests');
    }).toThrow(new Error('String expected, type sent: object - on field: tests'));

    expect(() => {
      maxLength([], 4, 'tests');
    }).toThrow(new Error('String expected, type sent: object - on field: tests'));

    expect(() => {
      maxLength(123546, 4, 'tests');
    }).toThrow(new Error('String expected, type sent: number - on field: tests'));
  });
});
