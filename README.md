![Formoose](https://raw.githubusercontent.com/romulobordezani/formoose/main/src/assets/Formoose-logo.svg)

<br /><br />
![Node.js CI](https://github.com/romulobordezani/formoose/workflows/Node.js%20CI/badge.svg)
![Node.js CI](https://github.com/romulobordezani/formoose/workflows/Node.js%20CI/badge.svg?event=issues)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
[![npm version](https://img.shields.io/npm/v/formoose.svg?style=flat)](https://www.npmjs.com/package/formoose)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)
<br /><br />
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

```jsx
import React, { useState } from 'react';
import { useFormoose } from 'formoose';

const schema = () => ({
  name: {
    max: 50,
    required: true,
    type: String
  }
});

function FormooseFormExample() {
  const {
    formData,
    validateAllFieldsSync,
    setProps
  } = useFormoose(schema(), t);

  const handleSubmit = async e => {
    e.preventDefault();

    let formIsValid;

    try {
      formIsValid = await validateAllFieldsSync();
    } catch (error) {
      console.error(error);
    }

    if (formIsValid) {
      alert('We are good to go!');
    } else {
      alert('oops, something went wrong.');
    }
  };

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" {...setProps('name')} />
      <label htmlFor="name">{t(formData.name.message)}</label>
      <button type="submit">Submit</button>
    </form>
  );

}

export default FormooseFormExample;
```

Examples available at [https://github.com/romulobordezani/formoose-example](https://github.com/romulobordezani/formoose-example)

#### Contributing:
Fell free to fork and submit changes and improvements, also please let me know if you find any [issues](https://github.com/romulobordezani/formoose/issues).
 

#### Running the core project

Install dependencies.
```shell
yarn
```


```shell
yarn start
```


```shell
yarn run test
```

Type Script will compile to `dist` folder, use `npm link` within the [example repository](https://github.com/romulobordezani/formoose-examples) to run and debug your changes.
