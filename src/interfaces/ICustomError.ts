interface ICustomError {
  message: string;
  name: string;
  field?: string | undefined;
  translatedMessageId?: string | undefined;
  translatedMessageLocals?: {} | undefined;
}

export default ICustomError;
