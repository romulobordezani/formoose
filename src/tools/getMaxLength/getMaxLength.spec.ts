import Formoose from '../index';
import { formDataMock, schema } from '../../mocks';

describe('[ getMaxLength - Index Util ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Returns a number with Max Length', () => {
    expect(Formoose.getMaxLength(formData, 'middleName', schema)).toEqual(50);
  });

  it('Returns undefined without errors from a model without max', () => {
    expect(Formoose.getMaxLength(formData, 'id', schema)).toBeUndefined();
  });
});
