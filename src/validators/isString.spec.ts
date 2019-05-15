import { isString } from './index';

describe('[ isString ]', () => {
  it('Former if it is a string', () => {
    expect(isString('oi', 'tests')).toBeTruthy();
  });

  it('Check if it detects an object', () => {
    expect(() => {
      isString({}, 'tests');
    }).toThrow(new Error('String expected, type sent: object - on field: tests'));
  });

  it('Check if it detects a number', () => {
    expect(() => {
      isString(123456, 'tests');
    }).toThrow(new Error('String expected, type sent: number - on field: tests'));
  });

  it('Check if it detects an array', () => {
    expect(() => {
      isString([], 'tests');
    }).toThrow(new Error('String expected, type sent: object - on field: tests'));
  });
});
