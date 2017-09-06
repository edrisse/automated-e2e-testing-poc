/**
 * Created by edrisse on 9/6/17.
 */

var LoginPage = require('../../home/pages/login-page');
var DashboardPage = require('../../home/pages/dashboard-page');

describe('test login', function() {
    it('should login successfully with a valid user', function() {
        var loginPage = new LoginPage();
        loginPage.visit();
        loginPage.login('admin', 'eSaude123');

        var dashboardPage = new DashboardPage();
        expect(loginPage.isErrorMessagePresent()).toBe(false);
    });

    it('should not login with invalid user', function() {
        var loginPage = new LoginPage();
        loginPage.visit();
        loginPage.login('admin2', 'eSaude123');

        var dashboardPage = new DashboardPage();
        expect(loginPage.isErrorMessagePresent()).toBe(true);
        expect(loginPage.getErrorMessage()).toBe('Authentication failed. Please try again');
    });

    it('should not login with invalid password', function() {
        var loginPage = new LoginPage();
        loginPage.visit();
        loginPage.login('admin', 'senhaErrada');

        var dashboardPage = new DashboardPage();
        expect(loginPage.isErrorMessagePresent()).toBe(true);
        expect(loginPage.getErrorMessage()).toBe('Authentication failed. Please try again');
    });
});
