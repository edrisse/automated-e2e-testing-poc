/**
 * Created by edrisse on 9/6/17.
 */

const HomeDashboardPage = require('../../home/pages/HomeDashboardPage');

class PatientRegistrationConfirmationPage {

    constructor() {
        console.log(HomeDashboardPage);
    }

    confirm() {
        const nextStepButton = element(by.id('confirm'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'confirm next-step must become clickable');
        nextStepButton.click();
    }

    visitHome() {
        element(by.id('home-link')).click();
        return new HomeDashboardPage();
    }
}

module.exports = PatientRegistrationConfirmationPage;
