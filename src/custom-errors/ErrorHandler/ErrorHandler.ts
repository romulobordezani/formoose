import { CustomError } from '../CustomError';

/**
 * @category Utils
 */
export class ErrorHandler {
  /**
   * Throws a Custom Error to be used on fields and validation process
   * @param {string} message
   * @param {string} field
   * @param {string} translatedMessageId
   * @param {Object} translatedMessageLocals
   * @throws {CustomError}
   */
  public static throw(
    message: string,
    field?: string,
    translatedMessageId?: string,
    translatedMessageLocals = {}
  ): never {
    throw new CustomError(
      message,
      field,
      translatedMessageId,
      translatedMessageLocals
    );
  }
}
