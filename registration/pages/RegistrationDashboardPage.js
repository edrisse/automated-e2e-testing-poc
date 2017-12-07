const HomeDashboardPage = require('../../home/pages/HomeDashboardPage');
const PatientHeaderPage = require('../../common/PatientHeaderPage');

class RegistrationDashboardPage {

    constructor() {
        this.patientHeader = new PatientHeaderPage();
        this.checkinButton = element(by.css('.checkin.btn'));
        this.checkedInMessage = element(by.css('.checked-in'));
    }

    visitHome() {
        element(by.id('home-link')).click();
        return new HomeDashboardPage();
    }
}

module.exports = RegistrationDashboardPage;
