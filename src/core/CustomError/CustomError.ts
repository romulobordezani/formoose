/**
 * The Customized Error, extends the Error native object
 * @category Utils
 * @param {string} message The error message, without translation
 * @param {string} field The field on formData
 * @param {string} translatedMessageId i18n translation Id
 * @param {object} translatedMessageLocals i18n translation locals
 */
function CustomError(message, field, translatedMessageId, translatedMessageLocals) {
    // @ts-ignore
    this.name = 'CustomError';
    // @ts-ignore
    this.message = message || '';
    // @ts-ignore
    const error = new Error(this.message);
    // @ts-ignore
    error.name = this.name;
    // @ts-ignore
    this.field = field;
    // @ts-ignore
    this.translatedMessageId = translatedMessageId;
    // @ts-ignore
    this.translatedMessageLocals = translatedMessageLocals;
}

CustomError.prototype = Object.create(Error.prototype);


export default CustomError;
