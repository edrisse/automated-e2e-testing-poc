/**
 * Created by edrisse on 9/6/17.
 */

class PatientRegistrationIdentifierPage {

    constructor() {
        this.identifierField = element(by.model('pi.identifier'));
    }

    visitNextStep() {
        const nextStepButton = element(by.id('next-step'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'identifier next-step must become clickable');
        nextStepButton.click();
    }

    setIdentifier(identifier) {
        this.identifierField.sendKeys(identifier);
    }
}

module.exports = PatientRegistrationIdentifierPage;