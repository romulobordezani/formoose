import { BelongToSchema, EnsureSchema } from '../';
import ISchemaItem from "../../interfaces/IschemaItem";

const Validate = (
    model: any,
    propsToValidate: string[],
    schema: { [key: string ]: ISchemaItem }
) =>
    new Promise(resolve => {
        BelongToSchema(propsToValidate, schema);
        propsToValidate.map(prop =>
            EnsureSchema({
                propName: prop,
                propsOnSchema: schema[prop],
                value: model[prop]
            })
        );
        resolve(true);
    });

export default Validate;
