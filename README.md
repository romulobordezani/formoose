![Formoose](https://raw.githubusercontent.com/romulobordezani/formoose/main/src/assets/Formoose-logo.svg)

<br /><br />
![Node.js CI](https://github.com/romulobordezani/formoose/workflows/Node.js%20CI/badge.svg)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
[![npm version](https://img.shields.io/npm/v/formoose.svg?style=flat)](https://www.npmjs.com/package/formoose)
[![Package tree-shaking](https://badgen.net/bundlephobia/tree-shaking/formoose)](https://bundlephobia.com/package/formoose)
[![Package minified & gzipped size](https://badgen.net/bundlephobia/minzip/formoose)](https://bundlephobia.com/package/formoose)
[![Package dependency count](https://badgen.net/bundlephobia/dependency-count/formoose)](https://bundlephobia.com/package/formoose)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/romulobordezani/formoose/blob/main/CONTRIBUTING.md)
<br /><br />
#### Formoose is a runtime **validation engine**, based on Mongoose's 🐻 schemas.

Meant to integrate `React Controled Forms` with back-end APIs using [MongoDB](https://www.mongodb.com/).

It **IS NOT** intended to do magic and generate automatically HTML forms, fields, nor styles, or React components for you.

It **DOES** provide an easy way to parse and validate the same **Mongoose** Schema using `React & Hooks`, integrating back and front-end validations in the same source of truth.

**IMPORTANT Note**: 🐻 [Mongoose](https://mongoosejs.com/) lib isn't required at the front-side at all, you can use any schemas following [these guide lines](https://mongoosejs.com/docs/guide.html), and validate them using [Mongoose built in validators](https://mongoosejs.com/docs/validation.html#built-in-validators) at the back-end side. 



 ### Provides:
* Fast sync/async validations for the whole schema.
* Validation for single fields
* Tools to set up errors on specific fields, to clean, deal with changes etc.
* Friendly and consistent error messages with internationalization support using [react-i18next](https://www.npmjs.com/package/react-i18next). 
* Real time validation in forms 
* Custom validations using simple Java Script functions, which allows you to validate whatever you want like Regexes, API based validations, custom logic etc.


#### 🚀 Getting started:

Basic example:

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

Examples available at [https://github.com/romulobordezani/formoose-example](https://github.com/romulobordezani/formoose-example) or at this [sand box](https://codesandbox.io/s/formoose-typescript-qchwm4?file=/src/components/FormooseForm/FormooseForm.tsx)

#### Contributing:
Fell free to fork and submit changes and improvements, also please let me know if you find any [issues](https://github.com/romulobordezani/formoose/issues).
 

#### Running the core project

Install dependencies.
```shell
yarn
```


```shell
yarn dev
```

Type Script will compile to `dist` folder, use `yarn link`.

Go to the [example repository](https://github.com/romulobordezani/formoose-examples) and run:

```shell
yarn link formoose
```
Run `yarn start` and the browser should open with some examples using your local Formoose's code. Now you can test and debug your changes.

### Looking for something else? 

So, you reached the end of this documentation and still think that Formoose is not for you?

No problem! If you aren't interested in using `Mogoose schemas` to control your forms, or `i18n` to provide instant translations to control them, or even in the Type Script definitions to provide you a great Development Experience - in a really small package. So...

Probably you are looking for something else like:

* [zod](https://github.com/colinhacks/zod) 
* [yup](https://github.com/jquense/yup)  
* [ajv](https://ajv.js.org/) does dealing with [json schemas](http://json-schema.org/)
* [joi](https://github.com/hapijs/joi)
* [superstruct](https://github.com/ianstormtaylor/superstruct)

And to use it with [react-hook-form.com](https://react-hook-form.com/) or [formik](https://formik.org/) 

Hope it helps 🍀.
