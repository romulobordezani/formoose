import { setMessage } from '@/tools';
import { formDataMock, curryStateSetter } from '../../__mocks__';
import { assign } from 'lodash';

describe('[ TOOLS ][ setMessage ]', () => {
  let formData;

  beforeEach(() => {
    formData = assign({}, formDataMock);
  });

  it('Sets an error as true in the formData model', () => {
    setMessage(curryStateSetter(formData), 'field1', 'got an error');
    expect(formData.field1).toMatchObject({
      message: 'got an error'
    });
  });
});
