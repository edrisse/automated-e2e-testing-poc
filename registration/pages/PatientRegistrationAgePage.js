/**
 * Created by edrisse on 9/6/17.
 */

const PatientRegistrationAddressPage = require('./PatientRegistrationAddressPage');

class PatientRegistrationAgePage {

    constructor() {
        this.birthDateField = element(by.model('patientCommon.patient.birthdate'));
        this.yearsField = element(by.id('patientYears'));
        this.monthsField = element(by.id('patientMonths'));
        this.daysField = element(by.id('patientDays'));
    }

    visitNextStep() {
        const nextStepButton = element(by.id('next-step'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'age next-step must become clickable');
        nextStepButton.click();
        return new PatientRegistrationAddressPage();
    }

    /**
     * Sets the patient birthdate.
     * This method is necessary because the first sendKeys causes the input to lose focus because of the datepicker.
     *
     * @param birthdate The patient birthdate
     */
    setBirthdate(birthdate) {
        this.birthDateField.sendKeys(birthdate);
        this.birthDateField.sendKeys(birthdate);
    }
}

module.exports = PatientRegistrationAgePage;
