/**
 * Created by edrisse on 9/6/17.
 */

var LoginPage = function () {

    var userNameField = element(by.model('loginUser.username'));
    var passwordField = element(by.model('loginUser.password'));
    var loginButton = element(by.css('.btn'));


    var vm = this;
    vm.login = login;
    vm.visit = visit;
    vm.getErrorMessage = getErrorMessage;
    vm.isErrorMessagePresent = isErrorMessagePresent;

    function login(userName, password) {
        userNameField.sendKeys(userName);
        passwordField.sendKeys(password);
        loginButton.click();
    }

    function visit() {
        browser.get('http://localhost:9000/home');
        browser.sleep(1000);
    }

    function getErrorMessage() {
        return element(by.binding('vm.errorMessageTranslateKey')).getText();
    }

    function isErrorMessagePresent() {
        return element(by.binding('vm.errorMessageTranslateKey')).isPresent();
    }
};

module.exports = LoginPage;