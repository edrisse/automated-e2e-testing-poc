/**
 * Created by edrisse on 9/6/17.
 */
class PatientRegistrationAgePage {

    constructor() {
        this.birthDateField = element(by.model('patientCommon.patient.birthdate')).sendKeys('1973-10-07');
        this.yearsField = element(by.id('patientYears')).sendKeys('40');
        this.monthsField = element(by.id('patientMonths')).sendKeys('10');
        this.daysField = element(by.id('patientDays')).sendKeys('29');
    }

    visitNextStep() {
        const nextStepButton = element(by.id('next-step'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'age next-step must become clickable');
        nextStepButton.click();
    }

    setBirthdate(birthdate) {
        this.birthDateField.sendKeys(birthdate);
    }

    setYears(years) {
        this.yearsField.sendKeys(years);
    }


    setMonths(months) {
        this.monthsField.sendKeys(months);
    }

    setDays(days) {
        this.daysField.sendKeys(days);
    }
}

module.exports = PatientRegistrationAgePage;
