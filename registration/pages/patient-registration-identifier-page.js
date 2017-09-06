/**
 * Created by edrisse on 9/6/17.
 */

var PatientRegistrationIdentifierPage = function () {

    var vm = this;

    vm.identifierField = element(by.model('pi.identifier'));

    vm.visitNextStep = visitNextStep;

    function visitNextStep() {
        var nextStepButton = element(by.id('next-step'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'identifier next-step must become clickable');
        nextStepButton.click();
    }


};

module.exports = PatientRegistrationIdentifierPage;