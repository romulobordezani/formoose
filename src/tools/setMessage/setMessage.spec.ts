import Formoose from '../index';
import { formDataMock, curryStateSetter } from '../../mocks';

describe('[ setMessage - Index Util ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Sets an error as true in the formData model', () => {
    Formoose.setMessage(curryStateSetter(formData), 'field1', 'got an error');
    expect(formData.field1).toMatchObject({
      message: 'got an error'
    });
  });
});
