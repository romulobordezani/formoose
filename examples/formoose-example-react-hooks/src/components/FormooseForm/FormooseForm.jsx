import React, { useState } from 'react';
import Formoose from 'formoose';
import { withTranslation } from 'react-i18next/src/index';

import schema from './schema';

function FormooseForm({ t }) {

  const formoose = new Formoose(schema, t);
  const { handleFieldChange, validateOneField, validateAllFieldsSync, mountFormData } = formoose.tools;
  const [formData, stateSetter] = useState(mountFormData());
  formoose.formData = formData;
  formoose.stateSetter = stateSetter;

  const handleSubmit = async e => {
    e.preventDefault();
    let formIsValid = await validateAllFieldsSync();

    if (formIsValid) {
      alert('We are good to go!');
    } else {
      alert('oops, something went wrong.');
    }
  };

  return(
    <form
      autoComplete="on"
      onSubmit={handleSubmit}
    >
      <input
        id="name"
        type="text"
        value={formData.name.value}
        onChange={e => handleFieldChange(e, 'name')}
        onFocus={e => handleFieldChange(e, 'name')}
        onBlur={() => validateOneField('name')}
      />
      <div>
        <label htmlFor="name">{t(formData.name.message)} </label>
      </div>
      <input type="submit" value="Validate!"/>
    </form>
  );

}

export default withTranslation()(FormooseForm);
