import { ICustomError } from '.';

export interface IField {
  error?: ICustomError|null|undefined;
  message?: string|null|undefined;
  value?: any;
}
