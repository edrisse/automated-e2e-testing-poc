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

        identifierPage.setIdentifier('11223344/11/12391');
        
        const namesPage = identifierPage.visitNextStep();
        namesPage.setGivenName("Hassam");
        namesPage.setSurname("Mussá");
        namesPage.setMiddlename("Adamo Sulemane");

        const genderPage = namesPage.visitNextStep();
        genderPage.selectMale();

        const agePage = genderPage.visitNextStep();
        agePage.setBirthdate('1973-10-07');
        agePage.setYears('40');
        agePage.setMonths('10');
        agePage.setDays('29');

        const addressPage = agePage.visitNextStep();
        addressPage.setLocality('Matola Rio');
        addressPage.setDistrict('Boane');
        addressPage.setProvince('Maputo');
        addressPage.setCountry('Mocambique');


        const otherPage = addressPage.visitNextStep();
        otherPage.setPhone1('846179380');
        otherPage.setProvenience('PRIVATE PROVIDER');

        const confirmationPage = otherPage.visitNextStep();
        confirmationPage.confirm();
        browser.sleep(5002); // wait for notifier
        const searchPage = confirmationPage.visitHome().visitRegistration();
        searchPage.search('hassam');

        const patientIdentifiers = searchPage.getPatientIdentifiers();
        expect(patientIdentifiers.count()).toEqual(1);
        expect(patientIdentifiers.get(0).getText()).toBe('11223344/11/12391');
    });
});
