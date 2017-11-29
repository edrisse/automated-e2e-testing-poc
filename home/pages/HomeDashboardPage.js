/**
 * Created by edrisse on 9/6/17.
 */

const PatientSearchPage = require('../../common/PatientSearchPage');

class HomeDashboardPage {

    constructor() {
        this.registrationModuleButton = element(by.id('registration'));
    }

    visitRegistration() {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(this.registrationModuleButton), 10000);
        browser.sleep(2000);
        this.registrationModuleButton.click();
        return new PatientSearchPage();
    }

    homeLinkIsPresent() {
        return element(by.id('home-link')).isPresent();
    }
}

module.exports = HomeDashboardPage;