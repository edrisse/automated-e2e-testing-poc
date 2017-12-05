const {createPatient} = require('../../common/util');

describe('registration dashboard', () => {

    const patient = {
        identifier: '12345678/22/98765',
        givenName: 'Malocy',
        surname: 'Ladon',
        middleName: '',
        birthdate: '1995-06-24',
        years: 40,
        months: 10,
        days: 29,
        locality: 'Zandamela',
        district: 'Zavala',
        province: 'Inhambane',
        country: 'Mocambique',
        phone1: '845695235',
        provenience: 'PRIVATE PROVIDER'
    };

    let registrationDashboardPage = {};

    beforeAll(() => {
        registrationDashboardPage = createPatient(patient);
    });

    describe('check-in the patient', () => {

        it('should show a checked-in message', () => {
            registrationDashboardPage.checkinButton.click();
            expect(registrationDashboardPage.checkedInMessage.isPresent()).toBe(true);
        });
    });
});
