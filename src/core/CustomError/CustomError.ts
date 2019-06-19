class CustomError extends Error {
  public message: string;
  private field: string | undefined;
  private translatedMessageId: string | undefined;
  private translatedMessageLocals: {} | undefined;

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
