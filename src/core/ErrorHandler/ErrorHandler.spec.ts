import ErrorHandler from './index';

describe('[ ERROR HANDLER ]', () => {
  it('Check if an Error was threw', () => {
    expect(() => {
      ErrorHandler.throw('Testing Message');
    }).toThrow(new Error('Testing Message'));
  });
});
