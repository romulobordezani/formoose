import { ICustomError } from '@/interfaces';

export class CustomError extends Error implements ICustomError {
  public message: string;
  public field: string | undefined;
  public translatedMessageId: string | undefined;
  public translatedMessageLocals: any | undefined;

  constructor(
    message?: string,
    field?: string | undefined,
    translatedMessageId?: string | undefined,
    translatedMessageLocals?: any | undefined
  ) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
    this.name = 'CustomError';
    this.message = message || '';
    this.field = field;
    this.translatedMessageId = translatedMessageId;
    this.translatedMessageLocals = translatedMessageLocals;
  }
}
