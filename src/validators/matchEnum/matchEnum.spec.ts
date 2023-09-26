import { matchEnum } from '@/validators';

const EnumMock = {
  enumValue1: 'ENUM1',
  enumValue2: 'ENUM2'
};

describe('[ matchEnum ]', () => {
  it('Allows a value listed at Enum options', () => {
    expect(matchEnum('ENUM1', EnumMock, 'test-match-enum')).toBeTruthy();
  });

  it('Detects not matches over an enum list', () => {
    expect(() => {
      matchEnum('abc', EnumMock, 'test-match-enum');
    }).toThrow(
      new Error(
        `The value 'abc' isn't listed in the possible enumerable list '{"enumValue1":"ENUM1","enumValue2":"ENUM2"}' - on field: test-match-enum`
      )
    );
  });
});
