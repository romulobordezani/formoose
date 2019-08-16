import { Validate } from '../../core';
import { getSimpleObject, setValue, mountFormData } from '../../tools';
import schema from './schema';
import { curryStateSetter } from "../mocks";

describe('[ VALIDATIONS RUNNER ]', () => {
  const formData = mountFormData(schema());
  setValue(curryStateSetter(formData), 'email', 'romulobordezani@gmail.com');
  const modelMock = getSimpleObject(formData);

  describe('[ Positive Case ]', () => {
    it('Validates Only Sent Fields', async () => {
      const result = await Validate(modelMock, [
        'email',
        'middleName'
      ], schema());
      expect(result).toBeTruthy();
    });
  });
});
