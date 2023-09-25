import { ICustomError } from '.';

export interface FieldProperties {
  error?: ICustomError;
  message?: string;
  value?: any;
}
