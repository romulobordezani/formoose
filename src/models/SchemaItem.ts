import { SupportedTypesEnum } from '.';

/**
 * @category Types and Interfaces
 */
export interface SchemaItem {
  max?: number;
  min?: number;
  required?: boolean;
  type: SupportedTypesEnum;
  validate?: {
    validator: (fieldValue: any) => boolean;
    message?: string;
  };
  enum?: Record<string, string>;
}
