/**
 * Created by edrisse on 9/6/17.
 */

var PatientRegistrationConfirmationPage = function () {

    var vm = this;

    vm.confirm = confirm;
    vm.visitHome = visitHome;

    function confirm() {
        var nextStepButton = element(by.id('confirm'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'confirm next-step must become clickable');
        nextStepButton.click();
    }

    function visitHome() {
        element(by.id('home-link')).click();
    }

};

module.exports = PatientRegistrationConfirmationPage;