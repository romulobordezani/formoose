import FormooseTools from '../index';
import { formDataMock, eventMock, curryStateSetter } from '../../__mocks__';

describe('[ TOOLS ][ handleFieldChange ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Feed formData with values from Dom events', () => {
    FormooseTools.handleFieldChange(eventMock, 'field1', curryStateSetter(formData));
    expect(FormooseTools.getModel(formData, 'field1')).toEqual({ field1: 'mockedValue' });
  });
});
