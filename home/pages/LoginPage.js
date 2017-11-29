/**
 * Created by edrisse on 9/6/17.
 */

const HomeDashboardPage = require('./HomeDashboardPage');

class LoginPage {

    constructor() {
        this.userNameField = element(by.model('loginUser.username'));
        this.passwordField = element(by.model('loginUser.password'));
        this.loginButton = element(by.css('.btn'));
    }

    login(userName, password) {
        this.userNameField.sendKeys(userName);
        this.passwordField.sendKeys(password);
        this.loginButton.click();
        browser.sleep(100); // wait for spinner
        return new HomeDashboardPage();
    }

    visit() {
        browser.get('http://localhost:9000/home/index.html#/login');
        browser.sleep(100); // wait for spinner
    }

    getErrorMessage() {
        return element(by.binding('vm.errorMessageTranslateKey')).getText();
    }

    isErrorMessagePresent() {
        return element(by.binding('vm.errorMessageTranslateKey')).isPresent();
    }
}

module.exports = LoginPage;