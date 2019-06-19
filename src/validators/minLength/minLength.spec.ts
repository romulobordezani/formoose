import { minLength } from '../index';

describe('[ minLength ]', () => {
  it('Check the min length positive case', () => {
    expect(minLength('abcd', 3, 'test')).toBeTruthy();
  });

  it('Check if it detects strings with less than expected characters', () => {
    expect(() => {
      minLength('abc', 7, 'tests');
    }).toThrow(
      new Error('String with length of 3, expected at least 7 characters - on field: tests')
    );
  });

  it('Check if it detects weird types as objects, numbers and arrays', () => {
    expect(() => {
      minLength({}, 4, 'tests');
    }).toThrow(new Error('String expected, type sent: object - on field: tests'));

    expect(() => {
      minLength([], 4, 'tests');
    }).toThrow(new Error('String expected, type sent: object - on field: tests'));

    expect(() => {
      minLength(123546, 4, 'tests');
    }).toThrow(new Error('String expected, type sent: number - on field: tests'));
  });
});
