/**
 * Created by edrisse on 9/6/17.
 */

var PatientSearchPage = function () {
    browser.sleep(7000);
    var newPatientButton = element(by.id('new-patient-button'));

    var vm = this;
    vm.searchField = element(by.model('searchText'));

    vm.visitNewPatient = visitNewPatient;
    vm.getPatientIdentifiers = getPatientIdentifiers;

    function visitNewPatient() {
        newPatientButton.click();
    }

    function getPatientIdentifiers() {
        return element.all(by.css('.patient-identifier'));
    }
};

module.exports = PatientSearchPage;