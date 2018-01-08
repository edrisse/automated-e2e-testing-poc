/**
 * Created by edrisse on 9/6/17.
 */

const PatientRegistrationIdentifierPage = require('../registration/pages/PatientRegistrationIdentifierPage');

class PatientSearchPage {

    constructor() {
        this.newPatientButton = element(by.id('new-patient'));
        this.searchField = element(by.model('vm.searchText'));
    }

    visitNewPatient() {
        browser.sleep(1000);
        this.newPatientButton.click();
        return new PatientRegistrationIdentifierPage();
    }

    /**
     * Finds a patient by identifier and navigates to the next page (usually dashboard).
     * This method is only necessary because when you call sendKeys with the full a patient identifier string the app
     * interprets this as a barcode scan.
     *
     * @param identifier The patient identifier to search for
     */
    searchByIdentifier(identifier) {
        this.searchField.sendKeys(identifier);
        browser.sleep(2000); // wait for spinner
        return this.afterSearch();
    }

    getPatientIdentifiers() {
        return element.all(by.css('.patient-identifier'));
    }

}

module.exports = PatientSearchPage;
