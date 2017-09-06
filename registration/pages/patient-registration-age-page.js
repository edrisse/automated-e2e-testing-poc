/**
 * Created by edrisse on 9/6/17.
 */

var PatientRegistrationAgePage = function () {

    var vm = this;

    vm.birthDateField = element(by.model('patientCommon.patient.birthdate')).sendKeys('1973-10-07');
    vm.yearsField = element(by.id('patientYears')).sendKeys('40');
    vm.monthsField = element(by.id('patientMonths')).sendKeys('10');
    vm.daysField = element(by.id('patientDays')).sendKeys('29');

    vm.visitNextStep = visitNextStep;

    function visitNextStep() {
        var nextStepButton = element(by.id('next-step'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'age next-step must become clickable');
        nextStepButton.click();
    }


};

module.exports = PatientRegistrationAgePage;