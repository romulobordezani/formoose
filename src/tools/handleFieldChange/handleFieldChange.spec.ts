import Formoose from '../index';
import { formDataMock, eventMock, curryStateSetter } from '../../mocks';

describe('[ handleFieldChange - Index Util ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Feed formData with values from Dom events', () => {
    Formoose.handleFieldChange(eventMock, 'field1', curryStateSetter(formData));
    expect(Formoose.getModel(formData, 'field1')).toEqual({ field1: 'mockedValue' });
  });
});
