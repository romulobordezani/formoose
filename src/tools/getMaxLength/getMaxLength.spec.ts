import { getMaxLength } from '../index';
import { formDataMock, schema } from '../../__mocks__';

describe('[ TOOLS ][ getMaxLength ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Returns a number with Max Length', () => {
    expect(
      getMaxLength(formData, 'middleName', schema())
    ).toEqual(50);
  });

  it('Returns undefined without errors from a model without max', () => {
    expect(getMaxLength(formData, 'id', schema())).toBeUndefined();
  });
});
