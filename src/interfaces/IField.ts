import { ICustomError } from '.';

interface IField {
  error?: ICustomError|null|undefined;
  message?: string|null|undefined;
  value?: any;
}

export default IField;
