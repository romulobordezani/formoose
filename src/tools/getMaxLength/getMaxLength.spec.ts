import { getMaxLength } from '../index';
import { schema } from '../../__mocks__';

describe('[ TOOLS ][ getMaxLength() ]', () => {
  it('Returns a number with Max Length', () => {
    expect(getMaxLength('middleName', schema())).toEqual(50);
  });

  it('Returns undefined without errors from a model without max', () => {
    expect(getMaxLength('id', schema())).toBeUndefined();
  });
});
