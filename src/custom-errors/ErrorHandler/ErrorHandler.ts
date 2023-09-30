import { ErrorCodes } from '../ErrorCodes';
import { FormooseError } from '../FormooseError';

/**
 * @category Custom Errors
 * @throws FormooseError
 */
export class ErrorHandler {
  /**
   * Throws a Custom Error to be used on fields and validation process
   * @throws {FormooseError}
   */
  public static throw(
    message: string,
    fieldName?: string,
    translatedMessageKey?: ErrorCodes | string,
    translatedMessageInterpolators = {}
  ): never {
    throw new FormooseError(message, fieldName, translatedMessageKey, translatedMessageInterpolators);
  }
}
