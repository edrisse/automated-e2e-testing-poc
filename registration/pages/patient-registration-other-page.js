/**
 * Created by edrisse on 9/6/17.
 */

var PatientRegistrationOtherPage = function () {

    var vm = this;

    vm.provenience = element(by.id('Proveniência'));
    vm.phone1 = element(by.id('Numero de Telefone 1'));

    vm.visitNextStep = visitNextStep;

    function visitNextStep() {
        var nextStepButton = element(by.id('next-step'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'other next-step must become clickable');
        nextStepButton.click();
    }


};

module.exports = PatientRegistrationOtherPage;