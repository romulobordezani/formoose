import {  EnsureSchema } from '../EnsureSchema';
import { BelongToSchema } from '../BelongToSchema';
import { ISchema } from "@/interfaces";

/**
 * Main validator method, returns a Promise that throws an error
 * when something is invalid according to schema set up, or true when all validations are fine.
 * @param {Object} model the object that represents the model, with key and values to be validated e.g. { name: 'Emmanuel' }
 * @param {string[]} propsToValidate list of model'' properties what will be validated. Props out of this list will be skipped
 * @param {ISchema} schema The Mongoose like schema containing all validations
 * @throws {ICustomError}
 * @constructor
 */
export const Validate = (
  model: any,
  propsToValidate: string[],
  schema: ISchema
) =>
  new Promise(resolve => {

    // Throws an error when detects an unknown prop, not listed in the Schema
    BelongToSchema(propsToValidate, schema);

    // Iterates the whole list of props, get theirs values from model and applies validations related on schema
    propsToValidate.map(prop =>
      EnsureSchema({
        propName: prop,
        propsOnSchema: schema[prop],
        value: model[prop]
      })
    );

    resolve(true);
  });

