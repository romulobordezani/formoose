import { isNumber } from '../index';

describe('[ isNumber ]', () => {
  it('Index if it is a number', () => {
    expect(isNumber(123, 'tests')).toBeTruthy();
  });

  it('Check if it detects an object', () => {
    expect(() => {
      isNumber({}, 'tests');
    }).toThrow(new Error('Number expected, type sent: object - on field: tests'));
  });

  it('Check if it detects a String', () => {
    expect(() => {
      isNumber('aaasd', 'tests');
    }).toThrow(new Error('Number expected, type sent: string - on field: tests'));
  });

  it('Check if it detects an array', () => {
    expect(() => {
      isNumber([], 'tests');
    }).toThrow(new Error('Number expected, type sent: object - on field: tests'));
  });
});
