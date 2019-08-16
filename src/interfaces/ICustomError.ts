interface ICustomError {
  message: string;
  field?: string | undefined;
  translatedMessageId?: string | undefined;
  translatedMessageLocals?: {} | undefined;
}

export default ICustomError;
