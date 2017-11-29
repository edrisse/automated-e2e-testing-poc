/**
 * Created by edrisse on 9/6/17.
 */
class PatientRegistrationAddressPage {

    constructor() {
        this.locality = element(by.id('address2'));
        this.district = element(by.id('countyDistrict'));
        this.province = element(by.id('stateProvince'));
        this.country = element(by.id('country'));
    }

    visitNextStep() {
        const nextStepButton = element(by.id('next-step'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'address next-step must become clickable');
        nextStepButton.click();
    }

    setLocality(locality) {
        this.locality.sendKeys(locality);
    }

    setDistrict(district) {
        this.district.sendKeys(district);
    }

    setProvince(province) {
        this.province.sendKeys(province);
    }

    setCountry(country) {
        this.country.sendKeys(country);
    }

}

module.exports = PatientRegistrationAddressPage;
