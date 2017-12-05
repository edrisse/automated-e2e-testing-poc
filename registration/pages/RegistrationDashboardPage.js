const HomeDashboardPage = require('../../home/pages/HomeDashboardPage');

class RegistrationDashboardPage {

    constructor() {
        this.checkinButton = element(by.css('.checkin.btn'));
        this.checkedInMessage = element(by.css('.checked-in'));
    }

    visitHome() {
        element(by.id('home-link')).click();
        return new HomeDashboardPage();
    }
}

module.exports = RegistrationDashboardPage;