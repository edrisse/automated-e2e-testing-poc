class PatientHeaderPage {

    constructor() {
        this.fullName = element(by.binding('vm.patient.fullName'));
        this.years = element(by.binding('vm.patient.age.years'));
        this.identifiers = element.all(by.repeater('identifier in vm.patient.identifiers'));
        this.gender = element(by.id('gender'));
        this.birthdate = element(by.binding('vm.patient.birthdate'));
    }
}

module.exports = PatientHeaderPage;
