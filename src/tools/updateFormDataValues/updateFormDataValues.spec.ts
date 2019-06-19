import Formoose from '../index';
import { formDataMock } from '../../mocks';

describe('[ updateFormDataValues - Index Util ]', () => {
  let formData;

  beforeEach(() => {
    formData = Object.assign({}, formDataMock);
  });

  it('Merge updates successfully - Admin', () => {
    Formoose.updateFormDataValues(formData, UserMock.getAdmin());
    expect(formData.firstName.value).toBe(UserMock.getAdmin().firstName);
    expect(formData.userType.value).toBe(UserMock.getAdmin().userType);
  });

  it('Merge updates successfully - Medtronic', () => {
    Formoose.updateFormDataValues(formData, UserMock.getMedtronic());
    expect(formData.firstName.value).toBe(UserMock.getMedtronic().firstName);
    expect(formData.lastName.value).toBe(UserMock.getMedtronic().lastName);
    // Test out an array type, kind of Applications
    expect(formData.applications.value).toBe(UserMock.getMedtronic().applications);
  });

  it('Merge updates successfully - Physician', () => {
    Formoose.updateFormDataValues(formData, UserMock.getPhysician());
    expect(formData.firstName.value).toBe(UserMock.getPhysician().firstName);
    expect(formData.middleName.value).toBe(UserMock.getPhysician().middleName);
    expect(formData.lastName.value).toBe(UserMock.getPhysician().lastName);
    // Test out an array type, kind of Applications
    expect(formData.applications.value).toBe(UserMock.getPhysician().applications);
  });

  it('Removes internal control properties as jwt and isLoggedIn', () => {
    const physicianUser = Object.assign({}, UserMock.getPhysician());
    physicianUser.isLoggedIn = true;

    Formoose.updateFormDataValues(formData, physicianUser);
    expect(formData).not.toMatchObject({
      isLoggedIn: physicianUser.isLoggedIn,
      jwt: physicianUser.jwt
    });
  });
});
