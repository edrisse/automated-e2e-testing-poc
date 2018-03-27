/**
 * Created by edrisse on 9/6/17.
 */

class HomeDashboardPage {

    constructor() {
        this.registrationModuleButton = element(by.id('registration'));
    }

    visitRegistration() {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(this.registrationModuleButton), 10000, 'registration module button must become clickable');
        browser.sleep(2000);
        this.registrationModuleButton.click();
        return new RegistrationPatientSearchPage();
    }

    homeLinkIsPresent() {
        return element(by.id('home-link')).isPresent();
    }
}

module.exports = HomeDashboardPage;

// Require here because of circular dependency
const RegistrationPatientSearchPage = require('../../registration/pages/RegistrationPatientSearchPage');
