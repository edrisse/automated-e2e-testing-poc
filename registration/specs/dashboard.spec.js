const {createPatient} = require('../../common/util');
const LoginPage = require('../../home/pages/LoginPage');

describe('registration dashboard', () => {

    const patient = {
        identifier: '12345678/22/98765',
        givenName: 'Malocy',
        surname: 'Ladon',
        middleName: '',
        birthdate: '09/01/1977',
        locality: 'Zandamela',
        district: 'Zavala',
        province: 'Inhambane',
        country: 'Mocambique',
        phone1: '845695235',
        provenience: 'PRIVATE PROVIDER'
    };

    let registrationDashboardPage = {};

    beforeAll(() => {
        createPatient(patient);
        browser.restart();
    });

    beforeEach(function () {
        const loginPage = new LoginPage();

        loginPage.visit();

        const searchPage = loginPage
            .login('admin', 'eSaude123')
            .visitRegistration();

        registrationDashboardPage = searchPage
            .searchByIdentifier('12345678/22/98765');
    });

    describe('patient header', () => {

        it('should show the patient name', () => {
            expect(registrationDashboardPage.patientHeader.fullName.getText()).toEqual('Malocy Ladon');
        });

        it('should show patient identifiers', () => {
            expect(registrationDashboardPage.patientHeader.identifiers.getText()).toEqual([
                'NID (SERVICO TARV): 12345678/22/98765'
            ]);
        });

        it('should show patient gender', () => {
            let src = registrationDashboardPage.patientHeader.gender.getAttribute('src');
            expect(src).toContain('male');
            expect(src).not.toContain('female');
        });

        it('should show patient age', () => {
            expect(registrationDashboardPage.patientHeader.years.getText()).toEqual('40');
        });

        it('should show patient birthdate', () => {
            expect(registrationDashboardPage.patientHeader.birthdate.getText()).toEqual('(09/01/1977)');
        });

    });

    describe('check-in the patient', () => {

        it('should show a checked-in message', () => {
            registrationDashboardPage.checkinButton.click();
            expect(registrationDashboardPage.checkedInMessage.isPresent()).toBe(true);
        });

    });
});
