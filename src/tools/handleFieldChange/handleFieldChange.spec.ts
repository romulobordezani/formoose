import { handleFieldChange, getModel } from '../index';
import { formDataMock, eventMock, curryStateSetter } from '../../__mocks__';
import { assign } from 'lodash';

describe('[ TOOLS ][ handleFieldChange ]', () => {
  let formData;

  beforeEach(() => {
    formData = assign({}, formDataMock);
  });

  it('Feed formData with values from Dom events', () => {
    handleFieldChange(eventMock, 'field1', curryStateSetter(formData));
    expect(getModel(formData, 'field1')).toEqual({ field1: 'mockedValue' });
  });
});
