const schema = () => ({
  name: {
    max: 50,
    required: true,
    type: String,
  }
});

export default schema;
