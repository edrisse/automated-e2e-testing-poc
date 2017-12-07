const PatientSearchPage = require('../../common/PatientSearchPage');
const RegistrationDashboardPage = require('./RegistrationDashboardPage');

class RegistrationPatientSearchPage extends PatientSearchPage {

    afterSearch() {
        return new RegistrationDashboardPage();
    }
}

module.exports = RegistrationPatientSearchPage;
