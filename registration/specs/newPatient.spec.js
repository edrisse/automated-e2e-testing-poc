/**
 * Created by edrisse on 9/6/17.
 */

const LoginPage = require('../../home/pages/LoginPage');

const PatientRegistrationIdentifierPage = require('../pages/PatientRegistrationIdentifierPage');
const PatientRegistrationNamesPage = require('../pages/PatientRegistrationNamesPage');
const PatientRegistrationGenderPage = require('../pages/PatientRegistrationGenderPage');
const PatientRegistrationAgePage = require('../pages/PatientRegistrationAgePage');
const PatientRegistrationAddressPage = require('../pages/PatientRegistrationAddressPage');
const PatientRegistrationOtherPage = require('../pages/PatientRegistrationOtherPage');
const PatientRegistrationConfirmationPage = require('../pages/PatientRegistrationConfirmationPage');

describe('test new patient registration', () => {
    it('should create new patient', () => {
        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.login('admin', 'eSaude123')
            .visitRegistration()
            .visitNewPatient();

        const identifierPage = new PatientRegistrationIdentifierPage();
        identifierPage.setIdentifier('11223344/11/12391');
        identifierPage.visitNextStep();

        const namesPage = new PatientRegistrationNamesPage();
        namesPage.setGivenName("Hassam");
        namesPage.setSurname("Mussá");
        namesPage.setMiddlename("Adamo Sulemane");
        namesPage.visitNextStep();

        const genderPage = new PatientRegistrationGenderPage();
        genderPage.selectMale();
        genderPage.visitNextStep();

        const agePage = new PatientRegistrationAgePage();
        agePage.setBirthdate('1973-10-07');
        agePage.setYears('40');
        agePage.setMonths('10');
        agePage.setDays('29');
        agePage.visitNextStep();

        const addressPage = new PatientRegistrationAddressPage();
        addressPage.setLocality('Matola Rio');
        addressPage.setDistrict('Boane');
        addressPage.setProvince('Maputo');
        addressPage.setCountry('Mocambique');
        addressPage.visitNextStep();

        const otherPage = new PatientRegistrationOtherPage();
        otherPage.setPhone1('846179380');
        otherPage.setProvenience('PRIVATE PROVIDER');
        otherPage.visitNextStep();

        const confirmationPage = new PatientRegistrationConfirmationPage();
        confirmationPage.confirm();
        browser.sleep(5002); // wait for notifier
        const searchPage = confirmationPage.visitHome().visitRegistration();
        searchPage.search('hassam');

        const patientIdentifiers = searchPage.getPatientIdentifiers();
        expect(patientIdentifiers.count()).toEqual(1);
        expect(patientIdentifiers.get(0).getText()).toBe('11223344/11/12391');
    });
});
