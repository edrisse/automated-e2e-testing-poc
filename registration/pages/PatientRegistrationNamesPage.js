/**
 * Created by edrisse on 9/6/17.
 */

const PatientRegistrationGenderPage = require('../pages/PatientRegistrationGenderPage');

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
        return new PatientRegistrationGenderPage();
    }
}

module.exports = PatientRegistrationNamesPage;