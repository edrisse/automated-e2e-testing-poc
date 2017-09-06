/**
 * Created by edrisse on 9/6/17.
 */

var LoginPage = require('../../home/pages/login-page');
var DashboardPage = require('../../home/pages/dashboard-page');
var PatientSearchPage = require('../pages/patient-search-page');

var PatientRegistrationIdentifierPage = require('../pages/patient-registration-identifier-page');
var PatientRegistrationNamesPage = require('../pages/patient-registration-names-page');
var PatientRegistrationGenderPage = require('../pages/patient-registration-gender-page');
var PatientRegistrationAgePage = require('../pages/patient-registration-age-page');
var PatientRegistrationAddressPage = require('../pages/patient-registration-address-page');
var PatientRegistrationOtherPage = require('../pages/patient-registration-other-page');
var PatientRegistrationConfirmationPage = require('../pages/patient-registration-confirmation-page');

describe('test new patient registration', function() {
    it('should create new patient', function() {
        var loginPage = new LoginPage();
        loginPage.visit();
        loginPage.login('admin', 'eSaude123');

        var dashboardPage = new DashboardPage();
        dashboardPage.visitRegistration();

        var searchPage = new PatientSearchPage();
        searchPage.visitNewPatient();

        var identifierPage = new PatientRegistrationIdentifierPage();
        identifierPage.identifierField.sendKeys('11223344/11/12391');
        identifierPage.visitNextStep();

        var namesPage = new PatientRegistrationNamesPage();
        namesPage.givenNameField.sendKeys("Hassam");
        namesPage.surnameNameField.sendKeys("Mussá");
        namesPage.middleNameField.sendKeys("Adamo Sulemane");
        namesPage.visitNextStep();

        var genderPage = new PatientRegistrationGenderPage();
        genderPage.genderMaleOption.click();
        genderPage.visitNextStep();

        var agePage = new PatientRegistrationAgePage();
        agePage.birthDateField.sendKeys('1973-10-07');
        agePage.yearsField.sendKeys('40');
        agePage.monthsField.sendKeys('10');
        agePage.daysField.sendKeys('29');
        agePage.visitNextStep();

        var addressPage = new PatientRegistrationAddressPage();
        addressPage.locality.sendKeys('Matola Rio');
        addressPage.district.sendKeys('Boane');
        addressPage.province.sendKeys('Maputo');
        addressPage.country.sendKeys('Mocambique');
        addressPage.visitNextStep();

        var otherPage = new PatientRegistrationOtherPage();
        otherPage.phone1.sendKeys('846179380');
        otherPage.provenience.sendKeys('PRIVATE PROVIDER');
        otherPage.visitNextStep();

        var confirmationPage = new PatientRegistrationConfirmationPage();
        confirmationPage.confirm();
        confirmationPage.visitHome();

        dashboardPage = new DashboardPage();
        dashboardPage.visitRegistration();

        searchPage = new PatientSearchPage();
        searchPage.searchField.sendKeys('hassam');
        var patientIdentifiers = searchPage.getPatientIdentifiers();
        expect(patientIdentifiers.count()).toEqual(1);
        expect(patientIdentifiers.get(0).getText()).toBe('11223344/11/12391');
    });
});
