import { isString } from '@/validators';

describe('[ isString ]', () => {
  it('Index if it is a string', () => {
    expect(isString('oi', 'tests')).toBeTruthy();
  });

  it('Check if it detects an object', () => {
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - Mutation tests
      isString({}, 'tests');
    }).toThrow(
      new Error('String expected, type sent: object - on field: tests')
    );
  });

  it('Check if it detects a number', () => {
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - Mutation tests
      isString(123456, 'tests');
    }).toThrow(
      new Error('String expected, type sent: number - on field: tests')
    );
  });

  it('Check if it detects an array', () => {
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - Mutation tests
      isString([], 'tests');
    }).toThrow(
      new Error('String expected, type sent: object - on field: tests')
    );
  });
});
