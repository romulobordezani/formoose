import { BelongToSchema } from '..';

const schemaMock = {
  prop1: {
    required: true,
    type: String,
    unique: true
  },
  prop2: {
    required: true,
    type: String
  }
};

describe('[ BELONG TO SCHEMA ]', () => {
  describe('[ All Good with expected Props ]', () => {
    it('Returns true with only expected props on the schema', () => {
      const expectedPropsOnSchema = [
        'prop1',
        'prop2'
      ];
      expect(
        BelongToSchema(expectedPropsOnSchema, schemaMock)
      ).toBeTruthy();
    });
  });

  describe('[ Unexpected Props ]', () => {
    it('Shall Throw Error when sent an unexpected property', () => {
      const unexpectedPropsOnSchema = [
        'prop3'
      ];
      expect(() => {
        BelongToSchema(unexpectedPropsOnSchema, schemaMock);
      }).toThrow(new Error(`${unexpectedPropsOnSchema} not found on Schema.`));
    });
  });
});
