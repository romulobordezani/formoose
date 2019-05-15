import { BelongToSchema, EnsureSchema } from '../../core';
import UserSchema from './schema';

/**
 * Function to Former the User Model based on a shared Schema between Back And Front-end
 * Note: please use inside a Promise or a Try/Catch, it will explode new Errors for bad validations
 * @param {UserModel|void} user instance to be validated
 * @param {string[]|void} propsToValidate list of props to be validated according to the schema
 * @returns {Promise<UserModel>} If it's valid - When not valid, specific error wil be Thrown
 */
const UserValidate = (
  user: any,
  propsToValidate: string[]
) =>
  new Promise(resolve => {
    BelongToSchema(propsToValidate, UserSchema()); // Trows an error if the prop doesn't exists in the schema
    propsToValidate.map(prop =>
      EnsureSchema({
        propsOnSchema: UserSchema()[prop],
        value: user[prop],
        propName: prop
      })
    );
    resolve(true);
  });

export default UserValidate;
