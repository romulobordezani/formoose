import { ErrorHandler } from '@/core/ErrorHandler';

describe('[ ERROR HANDLER ]', () => {
  it('Check if an Error was threw', () => {
    expect(() => {
      ErrorHandler.throw('Testing Message');
    }).toThrow(new Error('Testing Message'));
  });
});
