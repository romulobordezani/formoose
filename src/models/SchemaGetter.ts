import { Schema, PayloadFormat } from '.';

/**
 * @category Types and Interfaces
 */
export type SchemaGetter = (model?: PayloadFormat) => Schema;
