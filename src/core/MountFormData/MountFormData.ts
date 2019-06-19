const MountFormData = (schema: {}) => {
    const formData = {};
    Object.keys(schema).map(key => {
        formData[key] = {
            error: null,
            message: null,
            value: null
        };
    });
    return formData;
};

export default MountFormData;

