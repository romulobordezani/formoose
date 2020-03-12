import convertModelToForm from './convertModelToForm';

const mockSimpleObject = {

  "bc_number": "asdasd",

  "company": "asdasd",

  "request_organ": "asdasd",

  "request_UF": "asdasd",

  "operations": "asdasd",

  "process_number": "asdasd",

  "technic_cooperation": "asdasd",

  "date_letter": "asdasd",

  "expired_date_penalty": "asdasd",

  "penalty_value": "asdasd",

  "unity_value": "asdasd",

  "daily_value": "asdasd"
}

describe('[ TOOLS ][ updateFormDataValues ]', () => {
  let FormData;

  it('Merge updates successfully', () => {
    FormData = convertModelToForm(mockSimpleObject);
    expect(FormData).toMatchObject(
      {
        "bc_number": {
          "error": null,
          "message": null,
          "value": "asdasd"
        },
        "company": {
          "error": null,
          "message": null,
          "value": "asdasd"
        },
        "daily_value": {
          "error": null,
          "message": null,
          "value": "asdasd"
        }
      }
    )
  });
});
