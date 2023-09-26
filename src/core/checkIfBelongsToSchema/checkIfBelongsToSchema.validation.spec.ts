import { TypesEnum } from '@/interfaces';
import { checkIfBelongsToSchema } from '..';

export const schemaMock = {
  prop1: {
    required: true,
    type: TypesEnum.String,
    unique: true
  },
  prop2: {
    required: true,
    type: TypesEnum.String
  }
};

describe('[ BELONG TO SCHEMA ]', () => {
  describe('[ All Good with expected Props ]', () => {
    it('Returns true with only expected props on the schema', () => {
      const expectedPropsOnSchema = ['prop1', 'prop2'];
      expect(
        checkIfBelongsToSchema(expectedPropsOnSchema, schemaMock)
      ).toBeTruthy();
    });
  });

  describe('[ Unexpected Props ]', () => {
    it('Shall Throw Error when sent an unexpected property', () => {
      const unexpectedPropsOnSchema = ['prop3'];
      expect(() => {
        checkIfBelongsToSchema(unexpectedPropsOnSchema, schemaMock);
      }).toThrow(new Error(`${unexpectedPropsOnSchema} not found on Schema.`));
    });
  });
});
