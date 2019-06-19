import { isBoolean } from '../index';

describe('[ isBoolean ]', () => {
  it('Boolean positive case', () => {
    expect(isBoolean(true, 'test boolean')).toBeTruthy();
  });

  it('Check Not Booleans detection', () => {
    expect(() => {
      isBoolean('abc', 'tests boolean');
    }).toThrow(new Error("Expected type boolean, sent 'string' - on field: tests boolean"));
  });
});
