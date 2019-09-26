import {ICustomError} from "../../interfaces";

class CustomError extends Error implements ICustomError {
  public message: string;
  public field: string | undefined;
  public translatedMessageId: string | undefined;
  public translatedMessageLocals: {} | undefined;

  constructor(
      message?: string,
      field?: string | undefined,
      translatedMessageId?: string | undefined,
      translatedMessageLocals?: {} | undefined
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

export default CustomError;
