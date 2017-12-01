/**
 * Created by edrisse on 9/6/17.
 */

const PatientRegistrationAgePage = require('./PatientRegistrationAgePage');

class PatientRegistrationGenderPage {

    constructor() {
        this.genderMaleOption = element(by.id('male-label'));
    }

    visitNextStep() {
        const nextStepButton = element(by.id('next-step'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'gender next-step must become clickable');
        nextStepButton.click();
        return new PatientRegistrationAgePage();
    }

    selectMale() {
        this.genderMaleOption.click();
    }
}

module.exports = PatientRegistrationGenderPage;
