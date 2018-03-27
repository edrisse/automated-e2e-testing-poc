/**
 * Created by edrisse on 9/6/17.
 */

const PatientRegistrationNamesPage = require('../pages/PatientRegistrationNamesPage');

class PatientRegistrationIdentifierPage {

    constructor() {
        this.identifierField = element(by.model('pi.identifier'));
    }

    visitNextStep() {
        const nextStepButton = element(by.id('next-step'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'identifier next-step must become clickable');
        nextStepButton.click();
        return new PatientRegistrationNamesPage();
    }
}

module.exports = PatientRegistrationIdentifierPage;