const LoginPage = require('../home/pages/LoginPage');

function createPatient(patient) {
    const loginPage = new LoginPage();
    loginPage.visit();


    const identifierPage = loginPage
        .login('admin', 'eSaude123')
        .visitRegistration()
        .visitNewPatient();

    identifierPage.identifierField.sendKeys(patient.identifier);

    const namesPage = identifierPage.visitNextStep();
    namesPage.givenNameField.sendKeys(patient.givenName);
    namesPage.surnameNameField.sendKeys(patient.surname);
    namesPage.middleNameField.sendKeys(patient.middleName);

    const genderPage = namesPage.visitNextStep();
    genderPage.genderMaleOption.click();

    const agePage = genderPage.visitNextStep();
    if (patient.birthdate) {
        agePage.setBirthdate(patient.birthdate);
    } else {
        agePage.yearsField.sendKeys(patient.years);
        agePage.monthsField.sendKeys(patient.months);
        agePage.daysField.sendKeys(patient.days);
    }

    const addressPage = agePage.visitNextStep();
    addressPage.locality.sendKeys(patient.locality);
    addressPage.district.sendKeys(patient.district);
    addressPage.province.sendKeys(patient.province);
    addressPage.country.sendKeys(patient.country);

    const otherPage = addressPage.visitNextStep();
    otherPage.phone1.sendKeys(patient.phone1);
    otherPage.provenience.sendKeys(patient.provenience);

    return otherPage.visitNextStep().confirm();
}

module.exports = {
    createPatient: createPatient
};
