import cleanError from './cleanError/cleanError';
import setMessage from './setMessage/setMessage';
import setError from './setError/setError';
import setValue from './setValue/setValue';
import handleFieldChange from './handleFieldChange/handleFieldChange';
import validateAllFieldsSync from './validateAllFieldsSync/validateAllFieldsSync';
import validateOneField from './validateOneField/validateOneField';
import getModel from './getModel/getModel';
import getMaxLength from './getMaxLength/getMaxLength';
import updateFormDataValues from './updateFormDataValues/updateFormDataValues';
import getSimpleObject from './getSimpleObject/getSimpleObject';
import getTrimmed from './getTrimmed/getTrimmed';

class Formoose {
  public static cleanError = cleanError;

  public static setMessage = setMessage;

  public static setError = setError;

  public static setValue = setValue;

  public static handleFieldChange = handleFieldChange;

  public static getModel = getModel;

  public static getMaxLength = getMaxLength;

  public static updateFormDataValues = updateFormDataValues;

  public static getSimpleObject = getSimpleObject;

  public static getTrimmed = getTrimmed;

  public static validateAllFieldsSync = validateAllFieldsSync;

  public static validateOneField = validateOneField;
}

export default Formoose;
