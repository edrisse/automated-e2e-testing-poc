/**
 * Created by edrisse on 9/6/17.
 */

var PatientRegistrationGenderPage = function () {

    var vm = this;

    vm.genderMaleOption = element(by.id('male-label'));

    vm.visitNextStep = visitNextStep;

    function visitNextStep() {
        var nextStepButton = element(by.id('next-step'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'gender next-step must become clickable');
        nextStepButton.click();
    }


};

module.exports = PatientRegistrationGenderPage;