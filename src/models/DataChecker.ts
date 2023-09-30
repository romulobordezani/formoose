import { SchemaItem } from './SchemaItem';

/**
 * @category Types and Interfaces
 */
export type DataChecker = {
  fieldName: string;
  schemaItem: SchemaItem;
  fieldValue: any;
};
