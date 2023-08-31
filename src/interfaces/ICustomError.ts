export interface ICustomError {
  message: string;
  name: string;
  field?: string | undefined;
  translatedMessageId?: string | undefined;
  translatedMessageLocals?: Record<string, string> | undefined;
}
