import { FormState } from '@/interfaces';
import convertModelToForm from './convertModelToForm';

const mockSimpleObject = {
  bc_number: 'fake value',
  company: 'fake value',
  request_organ: 'fake value',
  request_UF: 'fake value',
  operations: 'fake value',
  process_number: 'fake value',
  technic_cooperation: 'fake value',
  date_letter: 'fake value',
  expired_date_penalty: 'fake value',
  penalty_value: 'fake value',
  unity_value: 'fake value',
  daily_value: 'fake value'
};

describe('[ TOOLS ][ convertToForm() ]', () => {
  let formState: FormState;

  it('Merge updates successfully', () => {
    formState = convertModelToForm(mockSimpleObject);

    expect(formState).toMatchObject({
      bc_number: {
        error: null,
        message: null,
        value: mockSimpleObject.bc_number
      },
      company: {
        error: null,
        message: null,
        value: mockSimpleObject.company
      },
      daily_value: {
        error: null,
        message: null,
        value: mockSimpleObject.daily_value
      }
    });
  });
});
