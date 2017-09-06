/**
 * Created by edrisse on 9/6/17.
 */

var DashboardPage = function () {

    browser.sleep(1000);

    var vm = this;

    vm.visitRegistration = visitRegistration;
    vm.homeLinkIsPresent = homeLinkIsPresent;

    function visitRegistration() {
        var registrationModuleButton = element(by.id('registration'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(registrationModuleButton), 10000);
        registrationModuleButton.click();
    }

    function homeLinkIsPresent() {
        return element(by.id('home-link')).isPresent();
    }

};

module.exports = DashboardPage;