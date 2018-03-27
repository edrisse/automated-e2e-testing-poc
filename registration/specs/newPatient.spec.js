/**
 * Created by edrisse on 9/6/17.
 */

const LoginPage = require('../../home/pages/LoginPage');

describe('test new patient registration', () => {
    it('should create new patient', () => {
        const loginPage = new LoginPage();
        loginPage.visit();


        const identifierPage = loginPage
            .login('admin', 'eSaude123')
            .visitRegistration()
            .visitNewPatient();

        identifierPage.identifierField.sendKeys('11223344/11/12391');

        const namesPage = identifierPage.visitNextStep();
        namesPage.givenNameField.sendKeys("Hassam");
        namesPage.surnameNameField.sendKeys("Mussá");
        namesPage.middleNameField.sendKeys("Adamo Sulemane");

        const genderPage = namesPage.visitNextStep();
        genderPage.genderMaleOption.click();

        const agePage = genderPage.visitNextStep();
        agePage.birthDateField.sendKeys('1973-10-07');
        agePage.yearsField.sendKeys('40');
        agePage.monthsField.sendKeys('10');
        agePage.daysField.sendKeys('29');

        const addressPage = agePage.visitNextStep();
        addressPage.locality.sendKeys('Matola Rio');
        addressPage.district.sendKeys('Boane');
        addressPage.province.sendKeys('Maputo');
        addressPage.country.sendKeys('Mocambique');

        const otherPage = addressPage.visitNextStep();
        otherPage.phone1.sendKeys('846179380');
        otherPage.provenience.sendKeys('PRIVATE PROVIDER');

        const confirmationPage = otherPage.visitNextStep();
        confirmationPage.confirm();
        browser.sleep(5002); // wait for notifier
        const searchPage = confirmationPage.visitHome().visitRegistration();
        searchPage.searchField.sendKeys('hassam');

        const patientIdentifiers = searchPage.getPatientIdentifiers();
        expect(patientIdentifiers.count()).toEqual(1);
        expect(patientIdentifiers.get(0).getText()).toBe('11223344/11/12391');
    });
});
