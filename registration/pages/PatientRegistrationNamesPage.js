/**
 * Created by edrisse on 9/6/17.
 */

class PatientRegistrationNamesPage {

    constructor() {
        this.givenNameField = element(by.name('givenName'));
        this.surnameNameField = element(by.name('patientSurname'));
        this.middleNameField = element(by.name('patientMiddleName'));
    }

    visitNextStep() {
        const nextStepButton = element(by.id('next-step'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'names next-step must become clickable');
        nextStepButton.click();
    }

    setGivenName(givenName) {
        this.givenNameField.sendKeys(givenName);
    }

    setSurname(surname) {
        this.surnameNameField.sendKeys(surname);
    }

    setMiddlename(middlename) {
        this.middleNameField.sendKeys(middlename);
    }
}

module.exports = PatientRegistrationNamesPage;