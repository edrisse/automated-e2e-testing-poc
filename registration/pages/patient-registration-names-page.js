/**
 * Created by edrisse on 9/6/17.
 */

var PatientRegistrationNamesPage = function () {

    var vm = this;

    vm.givenNameField = element(by.id('givenName'));
    vm.surnameNameField = element(by.id('patientSurname'));
    vm.middleNameField = element(by.id('patient_muddle_name'));

    vm.visitNextStep = visitNextStep;

    function visitNextStep() {
        var nextStepButton = element(by.id('next-step'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'names next-step must become clickable');
        nextStepButton.click();
    }


};

module.exports = PatientRegistrationNamesPage;