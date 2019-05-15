export default () => {
  return {
    _id: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true,
      min: 2
    },
    country: {
      type: String,
      required: true,
      min: 2
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50
    },
    experience: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50
    },
    applications: {
      type: Array,
      required: true
    },
    hospitalInstitution: {
      type: String,
      rrequired: true,
      min: 2,
      max: 50
    },
    lastName: {
      type: String,
      required: true,
      max: 50
    },
    middleName: {
      type: String,
      max: 50
    },
    timezone: {
      type: String
    },
    occupation: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true,
      min: 6,
      max: 20
    },
    referrer: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true
    }
  };
};
