/**
 * Created by edrisse on 9/6/17.
 */

var PatientRegistrationAddressPage = function () {

    var vm = this;

    vm.locality = element(by.id('address2'));
    vm.district = element(by.id('countyDistrict'));
    vm.province = element(by.id('stateProvince'));
    vm.country = element(by.id('country'));

    vm.visitNextStep = visitNextStep;

    function visitNextStep() {
        var nextStepButton = element(by.id('next-step'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'address next-step must become clickable');
        nextStepButton.click();
    }


};

module.exports = PatientRegistrationAddressPage;