import { CustomError } from '@/models';
import { ErrorCodes } from '../ErrorCodes';

/**
 * @class FormooseError
 * @category Custom Errors
 */
export class FormooseError extends Error implements CustomError {
  public message: string;
  public field: string | undefined;
  public translatedMessageKey: ErrorCodes | undefined | string;
  public translatedMessageInterpolators: any | undefined;

  constructor(
    message?: string,
    field?: string | undefined,
    translatedMessageKey?: ErrorCodes | undefined | string,
    translatedMessageInterpolators?: any | undefined
  ) {
    super(message);
    Object.setPrototypeOf(this, FormooseError.prototype);
    this.name = 'FormooseError';
    this.message = message || 'Unxpected validation error detected by Formoose.';
    this.field = field;
    this.translatedMessageKey = translatedMessageKey;
    this.translatedMessageInterpolators = translatedMessageInterpolators;
  }
}
