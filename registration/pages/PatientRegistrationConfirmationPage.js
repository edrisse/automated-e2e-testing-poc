/**
 * Created by edrisse on 9/6/17.
 */

const RegistrationDashboardPage = require('./RegistrationDashboardPage');

class PatientRegistrationConfirmationPage {

    constructor() {
    }

    confirm() {
        const nextStepButton = element(by.id('confirm'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'confirm next-step must become clickable');
        nextStepButton.click();
        browser.sleep(5002); // wait for notifier
        return new RegistrationDashboardPage();
    }
}

module.exports = PatientRegistrationConfirmationPage;
