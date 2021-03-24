![Formoose](src/assets/Formoose-logo.png?raw=true)

![Node.js CI](https://github.com/romulobordezani/formoose/workflows/Node.js%20CI/badge.svg)
![Node.js CI](https://github.com/romulobordezani/formoose/workflows/Node.js%20CI/badge.svg?event=issues)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
[![npm version](https://img.shields.io/npm/v/formoose.svg?style=flat)](https://www.npmjs.com/package/formoose)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

#### Mongoose's schema based validation engine, made to integrate back and front-end validations easily and using same schemas

It **IS NOT** intended to do magic and generate automatically Html forms and fields, styles, and React components.

It **DOES** provide tools to validate the same Mongoose Schema using `React & Hooks` and `Node.js` integrating back and front end validations in the same source.

**Important Note**: 🐻 Mongoose isn't required at all, but the supported schema follows [these guide lines](https://mongoosejs.com/docs/guide.html),
 what is different of [yup](https://github.com/jquense/yup) with its own .js Schemas, and also different of what [ajv](https://ajv.js.org/) does dealing with [json schemas](http://json-schema.org/).


 ### Provides:
* Easy to use sync/async validations of Mongoose schemas, both in Client Side using `React Hooks` or on server side using `Node.js Promises`.
* Validation for single fields
* Integration with React Hook `useState`, tools available to set up errors, clean, deal with changes etc.
* Friendly and consistent error messages with internationalization support using [react-i18next](https://www.npmjs.com/package/react-i18next). 
* Configurable Error messages for each type checking
* Real time validation in forms 
* Custom validations using simple Java Script functions


#### 🚀 Getting started:

Example:
```js
const schema = () => ({
  myField: {
    max: 50,
    required: true,
    type: String,
  }
});

export default schema;
```

```jsx
import React, { useState } from 'react';
import Formoose from 'formoose';

import schema from './schema.js';

function FormooseFormExample() {
  const formoose = new Formoose(schema);
  const { handleFieldChange, validateOneField, validateAllFieldsSync, mountFormData } = formoose.tools;
  const [formData, stateSetter] = useState({});
  mountFormData(formData, stateSetter);

  const handleSubmit = async e => {
    e.preventDefault();
    let formIsValid = await validateAllFieldsSync();

    if (formIsValid) {
      console.info('We are good to go!');
    } else {
      console.error('oops, something went wrong.');
    }

    return formIsValid;
  };

  return(
    <form onSubmit={handleSubmit}>
      <input
        id="myField"
        type="text"
        value={formData.myField.value}
        onChange={e => handleFieldChange(e, 'myField')}
        onFocus={e => handleFieldChange(e, 'myField')}
        onBlur={() => validateOneField('myField')}
      />
      {formData.myField.error && (
        <label htmlFor="myField">{formData.myField.message}</label>
      )}
      <input type="submit" value="Submit"/>
    </form>
  );

}

export default FormooseFormExample;
```

Examples available at [https://github.com/romulobordezani/formoose-example](https://github.com/romulobordezani/formoose-example)

#### Contributing:
Fell free to fork and submit changes and improvements, also please let me know if you find any [issues](https://github.com/romulobordezani/formoose/issues).

Also, I got a road-map, help wanted 😊

* Flavor to use GraphQl schemas instead of Mongoose Schemas
* Support casting to transform automatically convertible Types like strings in Dates, Numbers in Strings, etc. 
* Support Schemas parenting and inheritance
* Support touched, pristine and dirty states natively within the Field Interface


#### Running the core project
```shell
npm install
```

```shell
npm start
```

```shell
npm run test
```

Type Script will compile to `dist` folder, use `npm link` within the example repository to run and debug your changes.
